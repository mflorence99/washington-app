import { ModelState } from '../state/model';
import { Point } from '../state/maps';

import { Injectable } from '@angular/core';

const RAD2DEG = 180 / Math.PI;
const PI_4 = Math.PI / 4;

@Injectable({ providedIn: 'root' })
export class GeometryService {
  constructor(private model: ModelState) {}

  /* eslint-disable @typescript-eslint/member-ordering */

  latlon2xy(point: Point): Point {
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

  xy2latlon({ x, y }): Point {
    const lon =
      this.model.map.bbox.left +
      (x / this.model.tileContainer.width) *
        (this.model.map.bbox.right - this.model.map.bbox.left);
    const lat =
      this.model.map.bbox.top +
      (y / this.model.tileContainer.height) *
        (this.model.map.bbox.bottom - this.model.map.bbox.top);
    return { lat, lon };
  }

  // @see https://wiki.openstreetmap.org/wiki/Mercator#JavaScript_.28or_ActionScript.29

  y2lat(y: number): number {
    return (Math.atan(Math.exp(y / RAD2DEG)) / PI_4 - 1) * 90;
  }

  x2lon(x: number): number {
    return x;
  }

  lat2y(lat: number): number {
    return Math.log(Math.tan((lat / 90 + 1) * PI_4)) * RAD2DEG;
  }

  lon2x(lon: number): number {
    return lon;
  }
}
