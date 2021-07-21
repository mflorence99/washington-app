import { catchError } from 'rxjs/operators';
import { concatMap } from 'rxjs/operators';
import { createCanvas } from 'canvas';
import { from } from 'rxjs';
import { loadImage } from 'canvas';
import { mkdirSync } from 'fs';
import { of } from 'rxjs';
import { writeFileSync } from 'fs';

import rimraf from 'rimraf';

// seems like the best choice, but we could choose dynamically
// depending on image dimensions
const cxTile = 256;
const cyTile = 256;

// helper: compute slices for image
const slices = (total: number, size: number): number[] => {
  const array = [];
  let ix;
  for (ix = 0; ix < total - size; ix += size) array.push(size);
  if (total - ix > 0) array.push(total - ix);
  return array;
};

// these are the constructs we export so the app can generate the tiles
const tileContainers = {};
const tiles = {};

// helper: emit tiles
const emitTiles = (): string => `
// NOTE: auto-generated; do not edit

export interface TileContainer {
  height: number;
  width: number;
}

export type TileContainers = Record<string, TileContainer>;

export interface Tile {
  fileName: string;
  height: number;
  width: number;
  x: number;
  y: number;
};

export type Tiles = Record<string, Tile[]>;

export const TILE_CONTAINERS: TileContainers = ${JSON.stringify(
  tileContainers,
  null,
  2
)};

export const TILES: Tiles = ${JSON.stringify(tiles, null, 2)};
`;

// @see https://dev.to/j3nnning/resolve-promises-in-sequence-with-rxjs-concatmap-58a
from(['center', 'east', 'highland', 'island', 'lae', 'washington'])
  .pipe(
    concatMap((name) =>
      loadImage(`/home/mflo/Downloads/${name}.png`).then((image) => {
        // make sure output path exists
        const path = `src/assets/${name}`;
        rimraf.sync(path);
        mkdirSync(path);

        // calculate #rows, #cols
        const cols = slices(image.width, cxTile);
        const rows = slices(image.height, cyTile);

        // accumulate tiles index
        tileContainers[name] = {
          height: image.height,
          width: image.width
        };
        tiles[name] = [];

        // create slices
        let x = 0;
        cols.forEach((width, ix) => {
          let y = 0;
          rows.forEach((height, iy) => {
            // create a canvas to work with
            const canvas = createCanvas(width, height);
            const ctx = canvas.getContext('2d');

            // draw a slice of the image into the canvas
            ctx.drawImage(image, x, y, width, height, 0, 0, width, height);
            const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
            writeFileSync(`${path}/tile-${ix}-${iy}.jpeg`, buffer);

            // accumulate tiles index
            // NOTE:  awkward -- different root in app
            tiles[name].push({
              fileName: `assets/${name}/tile-${ix}-${iy}.jpeg`,
              height,
              width,
              x,
              y
            });

            // next row
            y += height;
          });

          // next column
          x += width;
        });
      })
    ),
    catchError((error) => {
      console.log(error);
      return of(null);
    })
  )
  .subscribe({
    complete: () => writeFileSync('src/app/state/tiles.ts', emitTiles())
  });
