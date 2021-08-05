// @see https://wiki.openstreetmap.org/wiki/Mercator#JavaScript_.28or_ActionScript.29

import { Lot } from '../state/parcels';
import { LOTS_BY_ID } from '../state/parcels';
import { MAPS } from '../state/maps';
import { ModelState } from '../state/model';
import { ViewState } from '../state/view';

import { Injectable } from '@angular/core';

import centroid from 'polygon-centroid';
import pointInPoly from 'point-in-polygon-extended';

export interface LatLon {
  lat: number;
  lon: number;
}
export interface XY {
  x: number;
  y: number;
}

export interface Rectangle {
  bottom?: number;
  height?: number;
  left: number;
  right?: number;
  top: number;
  width?: number;
}

export const SCALES = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5];

const RAD2DEG = 180 / Math.PI;
const PI_4 = Math.PI / 4;

@Injectable({ providedIn: 'root' })
export class GeometryService {
  constructor(private model: ModelState, private view: ViewState) {}

  centerLotsInViewport(lots: Lot[]): void {
    // put the center of the lots in the middle of the viewport
    const center = this.centerOfLots(lots);
    if (center) {
      const midPoint = this.centerOfViewport();
      const max = this.maxTranslate();
      const min = this.minTranslate();
      const translate: [number, number] = [
        Math.max(max[0], Math.min(min[0], -(Number(center.x) - midPoint.x))),
        Math.max(max[1], Math.min(min[1], -(Number(center.y) - midPoint.y)))
      ];
      this.view.translate(translate);
    } else console.log(`%cCan't select lots ${lots[0].id}`, 'color: indianred');
  }

  centerOfLots(lots: Lot[]): XY {
    // find the center of each lot
    const centers = lots.reduce((acc, lot) => {
      const polygon = document.getElementById(lot.id);
      if (polygon) {
        const raw = polygon.getAttribute('points');
        const points = raw.split(' ').map((point) => {
          const [x, y] = point.split(',');
          // NOTE: centroid wants points in XY format
          return { x: Number(x), y: Number(y) };
        });
        acc.push(centroid(points));
      } else
        console.log(`%cCan't find polygon for ${lot.id}`, 'color: indianred');
      return acc;
    }, []);
    // return the center of the centers
    if (centers.length === 0) return null;
    else if (centers.length === 1) return centers[0];
    else return centroid(centers);
  }

  centerOfViewport(): XY {
    const element = document.getElementById('theMap');
    if (
      element &&
      element.parentElement.offsetWidth &&
      element.parentElement.offsetHeight
    ) {
      return {
        x: element.parentElement.offsetWidth / 2,
        y: element.parentElement.offsetHeight / 2
      };
    } else return { x: 0, y: 0 };
  }

  centerPointInViewport(point: XY): void {
    // put the point in the middle of the viewport
    const midPoint = this.centerOfViewport();
    const max = this.maxTranslate();
    const min = this.minTranslate();
    const translate: [number, number] = [
      Math.max(max[0], Math.min(min[0], -(Number(point.x) - midPoint.x))),
      Math.max(max[1], Math.min(min[1], -(Number(point.y) - midPoint.y)))
    ];
    this.view.translate(translate);
  }

  event2point(event: HammerInput): XY {
    const point = event.center;
    const container = document.getElementById('theMap').parentElement;
    if (container.style.position === 'relative') {
      point.x -= container.offsetLeft;
      point.y -= container.offsetTop;
    }
    return point;
  }

  // NOTE: this works because we scale the viewport on its center
  isPointInViewport(point: XY, margin = 0): boolean {
    const center = this.centerOfViewport();
    const origin = this.originOfViewport();
    const translate = this.view.view.translate;
    const scale = this.view.view.scale;
    const xlate = {
      x: -translate[0],
      y: -translate[1]
    };
    // tl            top left corner of viewport
    // cx            the distance of edge from the center
    // cx/scale      the actual distance in unscaled units
    // cx - cx/scale the delta from scaling
    // so ...
    // tl.x = cx - cx/scale
    // tl.y = cy - cy/scale
    const tl = { x: 0, y: 0 };
    const cx = center.x;
    const dx = cx - cx / scale;
    const ox = origin.x / scale;
    tl.x = dx - ox + xlate.x + margin;
    const cy = center.y;
    const dy = cy - cy / scale;
    const oy = origin.y / scale;
    tl.y = dy - oy + xlate.y + margin;
    // w             the width of the viewport
    // w/scale       the actual width in unscaled units
    // so ...
    // br.x = tl.x + w/scale
    // br.y = tl.y + h/scale
    const w = ((center.x - margin * 2) * 2) / scale;
    const h = ((center.y - margin * 2) * 2) / scale;
    const br = { x: tl.x + w, y: tl.y + h };
    return (
      point.x >= tl.x && point.x < br.x && point.y >= tl.y && point.y < br.y
    );
  }

  lat2y(lat: number): number {
    return Math.log(Math.tan((lat / 90 + 1) * PI_4)) * RAD2DEG;
  }

  latlon2xy(point: LatLon): XY {
    const x =
      ((this.lon2x(point.lon) - this.lon2x(this.model.map.bbox.left)) *
        this.model.tileContainer.width) /
      (this.lon2x(this.model.map.bbox.right) -
        this.lon2x(this.model.map.bbox.left));
    const y =
      ((this.lat2y(point.lat) - this.lat2y(this.model.map.bbox.top)) *
        this.model.tileContainer.height) /
      (this.lat2y(this.model.map.bbox.bottom) -
        this.lat2y(this.model.map.bbox.top));
    return { x, y };
  }

  lon2x(lon: number): number {
    return lon;
  }

  maxScale(): number {
    return SCALES[SCALES.length - 1];
  }

  maxTranslate(): [number, number] {
    const element = document.getElementById('theMap');
    if (
      element &&
      element.parentElement.offsetWidth &&
      element.offsetWidth &&
      element.parentElement.offsetHeight &&
      element.offsetHeight
    ) {
      return [
        element.parentElement.offsetWidth - element.offsetWidth,
        element.parentElement.offsetHeight - element.offsetHeight
      ];
    } else return [-Number.MAX_VALUE, -Number.MAX_VALUE];
  }

  minScale(): number {
    const element = document.getElementById('theMap');
    if (
      element &&
      element.parentElement.offsetWidth &&
      element.offsetWidth &&
      element.parentElement.offsetHeight &&
      element.offsetHeight
    ) {
      const minX = element.parentElement.offsetWidth / element.offsetWidth;
      const minY = element.parentElement.offsetHeight / element.offsetHeight;
      // NOTE: make sure that scale is always represented in scales
      return Math.round(Math.max(minX, minY, SCALES[0]) * 10) / 10;
    } else return SCALES[0];
  }

  minTranslate(): [number, number] {
    return [0, 0];
  }

  nearestLotID(point: XY, lotIDs: string[]): string {
    let lastDistance = Number.MAX_VALUE;
    let nearestLotID = null;
    const lots = lotIDs.flatMap((lotID) => LOTS_BY_ID[lotID]);
    lots.forEach((lot) => {
      const center = this.centerOfLots([lot]);
      const distance = Math.abs(
        Math.hypot(point.x - center.x, point.y - center.y)
      );
      console.log(`Distance to ${lot.id} is ${distance}`);
      if (distance < lastDistance) {
        lastDistance = distance;
        nearestLotID = lot.id;
      }
    });
    return nearestLotID;
  }

  originOfViewport(): XY {
    const element = document.getElementById('theMap');
    if (element) {
      return {
        x: element.parentElement.offsetLeft,
        y: element.parentElement.offsetTop
      };
    } else return { x: 0, y: 0 };
  }

  scaleDown(): void {
    const ix = SCALES.findIndex((scale) => scale === this.view.view.scale);
    if (ix > 0) this.view.scale(SCALES[ix - 1]);
  }

  scaleUp(): void {
    const ix = SCALES.findIndex((scale) => scale === this.view.view.scale);
    if (ix < SCALES.length - 1 && ix !== -1) this.view.scale(SCALES[ix + 1]);
  }

  whichLotID(point: XY): string {
    const polygons = Array.from(
      document.querySelectorAll<SVGGeometryElement>(
        'app-home .lots svg g polygon'
      )
    );
    // @see robust-point-in-polygon, point-in-polygon and point-in-polygon-extended on GitHub
    // we tried them all and pointInPoly.pointInPolyWindingNumber
    // was the most reliable -- looks like the ray cast algorithm
    // gets confused
    // TODO: we should do "find" but keep "filter" for now
    const lots = polygons.filter((polygon) => {
      const raw = polygon.getAttribute('points');
      const points = raw.split(' ').map((p) => p.split(','));
      return pointInPoly.pointInPolyWindingNumber([point.x, point.y], points);
    });
    // TODO: resolve ambiguous matches by finding the nearest
    const lotIDs = lots.map((p) => p.id);
    console.log(
      `%cFound lots: ${lotIDs.join(', ')}`,
      lots.length > 1 ? 'color: indianred' : 'color: gold'
    );
    return lots.length > 1 ? this.nearestLotID(point, lotIDs) : lots[0]?.id;
  }

  whichMapIDs(point: LatLon): string[] {
    return Object.keys(MAPS).filter((mapID) => {
      const map = MAPS[mapID];
      const inside =
        point.lon >= map.bbox.left &&
        point.lon < map.bbox.right &&
        point.lat >= map.bbox.bottom &&
        point.lat < map.bbox.top;
      return inside;
    });
  }

  x2lon(x: number): number {
    return x;
  }

  xy2latlon(point: XY): LatLon {
    const lon =
      this.model.map.bbox.left +
      (point.x / this.model.tileContainer.width) *
        (this.model.map.bbox.right - this.model.map.bbox.left);
    const lat =
      this.model.map.bbox.top +
      (point.y / this.model.tileContainer.height) *
        (this.model.map.bbox.bottom - this.model.map.bbox.top);
    return { lat, lon };
  }

  y2lat(y: number): number {
    return (Math.atan(Math.exp(y / RAD2DEG)) / PI_4 - 1) * 90;
  }
}
