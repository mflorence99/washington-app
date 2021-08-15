import { GeometryService } from '../services/geometry';
import { LatLon } from '../services/geometry';
import { Lot } from '../state/parcels';
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

  edgeLengths: { length: number; path: LatLon[] }[] = [];

  ftLotHeight = 0;
  ftLotWidth = 0;

  @Input() lot: Lot;

  constructor(private geometry: GeometryService) {}

  coalesceLengths(): any {}

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
    console.log(
      `%cLot resized ${event.newWidth}x${event.newHeight}`,
      'color: steelblue'
    );
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
    // coalesce lengths of lot edges
    this.edgeLengths = [];
    this.lot.lengths.forEach((length, ix) => {
      let edgeLength = { length: 0, path: [] };
      length.forEach((value, iy) => {
        edgeLength.length += value;
        edgeLength.path.push(this.lot.boundaries[ix][iy]);
        edgeLength.path.push(this.lot.boundaries[ix][iy + 1]);
        if (edgeLength.length > this.ftLotWidth * 0.2) {
          this.edgeLengths.push(edgeLength);
          edgeLength = { length: 0, path: [] };
        }
      });
      if (edgeLength.length > 0) this.edgeLengths.push(edgeLength);
    });
  }
}
