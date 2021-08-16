import { GeometryService } from '../services/geometry';
import { LatLon } from '../services/geometry';
import { Lot } from '../state/parcels';
import { Params } from '../services/params';
import { Rectangle } from '../services/geometry';
import { XY } from '../services/geometry';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { ViewEncapsulation } from '@angular/core';

interface LotLine {
  bearing: number;
  length: number;
  path: LatLon[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-lot',
  styleUrls: ['./lot.scss'],
  templateUrl: './lot.html'
})
export class LotComponent {
  bbox: Rectangle = {
    bottom: Number.MAX_SAFE_INTEGER,
    left: Number.MAX_SAFE_INTEGER,
    top: Number.MIN_SAFE_INTEGER,
    right: Number.MIN_SAFE_INTEGER
  };

  dims: Rectangle = {
    height: 0,
    left: 0,
    top: 0,
    width: 0
  };

  ft2px = 0;
  ftLotHeight = 0;
  ftLotWidth = 0;

  @Input() lot: Lot;

  lotLines: LotLine[] = [];

  constructor(private geometry: GeometryService, private params: Params) {}

  // 👇 much simplified version of geometry code suitable for small area
  latlon2xy({ lat, lon }): XY {
    const x =
      ((lon - this.bbox.left) * this.dims.width) /
      (this.bbox.right - this.bbox.left);
    const y =
      ((lat - this.bbox.top) * this.dims.height) /
      (this.bbox.bottom - this.bbox.top);
    return { x, y };
  }

  path(points: LatLon[]): string {
    return points.reduce((acc, point, ix) => {
      const { x, y } = this.latlon2xy(point);
      if (ix === 0) return `M ${x} ${y}`;
      return `${acc} L ${x} ${y}`;
    }, '');
  }

  points(points: LatLon[]): string {
    return points
      .map((point: LatLon) => {
        const { x, y } = this.latlon2xy(point);
        return `${x},${y}`;
      })
      .join(' ');
  }

  resize(event: ResizedEvent): void {
    // compute bounding coordinates of lot
    this.lot.boundaries.forEach((boundary) => {
      boundary.forEach((point) => {
        this.bbox.right = Math.max(this.bbox.right, point.lon);
        this.bbox.top = Math.max(this.bbox.top, point.lat);
        this.bbox.left = Math.min(this.bbox.left, point.lon);
        this.bbox.bottom = Math.min(this.bbox.bottom, point.lat);
      });
    });

    // extent of lot in feet
    this.ftLotHeight = this.geometry.distance(
      { lat: this.bbox.top, lon: this.bbox.left },
      { lat: this.bbox.bottom, lon: this.bbox.left }
    );
    this.ftLotWidth = this.geometry.distance(
      { lat: this.bbox.top, lon: this.bbox.left },
      { lat: this.bbox.top, lon: this.bbox.right }
    );

    // extent of viewport in pixels with 5% margin all around
    const pxViewport = {
      height: event.newHeight * 0.9,
      left: event.newWidth * 0.05,
      top: event.newHeight * 0.05,
      width: event.newWidth * 0.9
    };

    // calculate dimensions of lot
    const arLot = this.ftLotWidth / this.ftLotHeight;
    const arViewport = pxViewport.width / pxViewport.height;
    this.ft2px = pxViewport.width / this.ftLotWidth;
    if (arViewport >= arLot) {
      this.dims.height = pxViewport.height;
      this.dims.width = pxViewport.height * arLot;
      this.dims.top = pxViewport.top;
      this.dims.left =
        pxViewport.left + (pxViewport.width - this.dims.width) / 2;
    } else {
      this.dims.height = pxViewport.width / arLot;
      this.dims.width = pxViewport.width;
      this.dims.top =
        pxViewport.top + (pxViewport.height - this.dims.height) / 2;
      this.dims.left = pxViewport.left;
    }

    // 👇 the hard part!
    this.lotLines = this.makeLotLines();
  }

  // 👇 we don't want the commas that the DecimalPipe introduces
  round(value: number): number {
    return Math.round(value);
  }

  private isLineReallyShort(length: number): boolean {
    return length * this.ft2px < 4;
  }

  private isLineStraight(p: number, q: number): boolean {
    // TODO: parameterize
    const threshold = 30;
    const straight =
      Math.abs(p - q) < threshold || Math.abs(p - q) > 360 - threshold;
    if (!straight)
      console.log(`%sLine not straight: ${p} ${q}`, 'color: palegreen');
    return straight;
  }
  private makeLotLine(): LotLine {
    return { bearing: 0, length: 0, path: [] };
  }

  private makeLotLines(): LotLine[] {
    const lotLines: LotLine[] = [];
    this.lot.lengths.forEach((lengths, ix) => {
      let lotLine = this.makeLotLine();
      lengths.reduce((acc, length, iy) => {
        const p = this.lot.boundaries[ix][iy];
        const q = this.lot.boundaries[ix][iy + 1];
        const bearing = this.geometry.bearing(p, q);

        if (iy === 0) {
          lotLine.bearing = bearing;
          lotLine.length = length;
          lotLine.path = [p, q];
        } else {
          if (
            !this.isLineStraight(bearing, lotLine.bearing) &&
            !this.isLineReallyShort(length)
          ) {
            this.sortPathClockwise(lotLine.path, this.lot.centers[ix]);
            acc.push(lotLine);
            lotLine = this.makeLotLine();
          }
          lotLine.bearing = bearing;
          lotLine.length += length;
          if (lotLine.path.length === 0) lotLine.path.push(p);
          lotLine.path.push(q);
        }

        return acc;
      }, lotLines);

      if (lotLine.path.length > 0) {
        this.sortPathClockwise(lotLine.path, this.lot.centers[ix]);
        lotLines.push(lotLine);
      }
    });
    return lotLines;
  }

  // 👀 https://stackoverflow.com/questions/6989100/sort-points-in-clockwise-order
  private sortPathClockwise(points: LatLon[], center: LatLon): void {
    points.sort(
      (a, b) =>
        (a.lon - center.lon) * (b.lat - center.lat) -
        (b.lon - center.lon) * (a.lat - center.lat)
    );
  }
}
