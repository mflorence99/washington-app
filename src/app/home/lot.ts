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

  edgeLengths: { length: number; points: LatLon[] }[] = [];

  ft2px = 0;
  ftLotHeight = 0;
  ftLotWidth = 0;

  @Input() lot: Lot;

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

  points(boundary: LatLon[]): string {
    return boundary
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
    this.coalesceEdgeLengths();
  }

  // 👇 we don't want the commas that the DecimalPipe introduces
  round(value: number): number {
    return Math.round(value);
  }

  private coalesceEdgeLengths(): void {
    this.edgeLengths = [];
    this.lot.lengths.forEach((length, ix) => {
      // we will coalesce "short" lengths into one path
      let edgeLength = { length: 0, points: [] };
      let lastBearing;
      length.forEach((value, iy) => {
        const p = this.lot.boundaries[ix][iy];
        const q = this.lot.boundaries[ix][iy + 1];

        // calculate the bearing between this pont and the last
        let bearing;
        if (edgeLength.points.length > 0) {
          const r = edgeLength.points[edgeLength.points.length - 1];
          bearing = this.geometry.bearing(r, q);
        }

        // if we have a "complete" path, push it & prepare for next
        // 🧨 EXPERIMENTAL
        if (
          edgeLength.points.length > 0 &&
          (Math.abs(lastBearing - bearing) > 30 ||
            edgeLength.length * this.ft2px > 200)
        ) {
          this.sortPointsClockwise(edgeLength.points, this.lot.centers[ix]);
          this.edgeLengths.push(edgeLength);
          edgeLength = { length: 0, points: [] };
        }
        lastBearing = bearing;

        // accumulate the current path
        edgeLength.length += value;
        if (edgeLength.points.length === 0) edgeLength.points.push(p);
        edgeLength.points.push(q);
      });

      // add any uncompleted edge length to list
      if (edgeLength.length > 0) {
        this.sortPointsClockwise(edgeLength.points, this.lot.centers[ix]);
        this.edgeLengths.push(edgeLength);
      }
    });
  }

  // 👀 https://stackoverflow.com/questions/6989100/sort-points-in-clockwise-order
  private sortPointsClockwise(points: LatLon[], center: LatLon): void {
    points.sort(
      (a, b) =>
        (a.lon - center.lon) * (b.lat - center.lat) -
        (b.lon - center.lon) * (a.lat - center.lat)
    );
  }
}
