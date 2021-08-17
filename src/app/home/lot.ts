import { GeometryService } from '../services/geometry';
import { GoogleService } from '../services/google';
import { LatLon } from '../services/geometry';
import { Lot } from '../state/parcels';
import { Params } from '../services/params';
import { Rectangle } from '../services/geometry';
import { XY } from '../services/geometry';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Input } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { ViewChild } from '@angular/core';
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

  center: LatLon;

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

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    fullscreenControl: false,
    keyboardShortcuts: false,
    mapTypeControl: false,
    mapTypeId: 'terrain'
  };

  constructor(
    public api: GoogleService,
    private geometry: GeometryService,
    private params: Params
  ) {}

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

  path(latlons: LatLon[]): string {
    return latlons.reduce((acc, latlon, ix) => {
      const { x, y } = this.latlon2xy(latlon);
      if (ix === 0) return `M ${x} ${y}`;
      else if (latlons.length <= 3) return `${acc} L ${x} ${y}`;
      else
        return `${acc} ${this.geometry.bezier(
          latlon,
          ix,
          latlons,
          this.latlon2xy.bind(this)
        )}`;
    }, '');
  }

  points(latlons: LatLon[]): string {
    return latlons
      .map((latlon: LatLon) => {
        const { x, y } = this.latlon2xy(latlon);
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

    // ... and its center
    this.center = {
      lat: this.bbox.top - (this.bbox.top - this.bbox.bottom) / 2,
      lon: this.bbox.left + (this.bbox.right - this.bbox.left) / 2
    };

    // extent of lot in feet
    this.ftLotHeight = this.geometry.distance(
      { lat: this.bbox.top, lon: this.bbox.left },
      { lat: this.bbox.bottom, lon: this.bbox.left }
    );
    this.ftLotWidth = this.geometry.distance(
      { lat: this.bbox.top, lon: this.bbox.left },
      { lat: this.bbox.top, lon: this.bbox.right }
    );

    // extent of viewport in pixels with Npx margin all around
    const margin = this.params.home.lot.pxViewportMargin;
    const pxViewport = {
      height: event.newHeight - margin * 2,
      left: margin,
      top: margin,
      width: event.newWidth - margin * 2
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
    this.dims.bottom = this.dims.top + this.dims.height;
    this.dims.right = this.dims.left + this.dims.width;

    // 👇 no need to overthink this -- Google will center the bbox
    // in its viewport, which we've done ourselves for the lot lines
    if (this.map) {
      const bounds = new google.maps.LatLngBounds(
        {
          lat: this.bbox.top,
          lng: this.bbox.left
        },
        {
          lat: this.bbox.bottom,
          lng: this.bbox.right
        }
      );
      this.map.fitBounds(bounds);
      this.map.panToBounds(bounds);
    }

    // 👇 the hard part!
    this.lotLines = this.makeLotLines();
  }

  // 👇 we don't want the commas that the DecimalPipe introduces
  round(value: number): number {
    return Math.round(value);
  }

  private isLineReallyShort(length: number): boolean {
    return length * this.ft2px < 8;
  }

  private isLineStraight(p: number, q: number): boolean {
    const threshold = this.params.home.lot.straightLineThreshold;
    return Math.abs(p - q) < threshold || Math.abs(p - q) > 360 - threshold;
  }

  private makeLotLine(): LotLine {
    return { bearing: 0, length: 0, path: [] };
  }

  private makeLotLines(): LotLine[] {
    const lotLines: LotLine[] = [];
    this.lot.lengths.forEach((lengths, ix) => {
      const boundary = this.lot.boundaries[ix];

      let lotLine = this.makeLotLine();
      lengths.reduce((acc, length, iy) => {
        const p = boundary[iy];
        const q = boundary[iy + 1];
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
            // this.sortPathCounterClockwise(lotLine.path, center);
            acc.push(lotLine);
            lotLine = this.makeLotLine();
          }
          if (!this.isLineReallyShort(length)) lotLine.bearing = bearing;
          lotLine.length += length;
          if (lotLine.path.length === 0) lotLine.path.push(p);
          lotLine.path.push(q);
        }

        return acc;
      }, lotLines);

      if (lotLine.path.length > 0) {
        // this.sortPathCounterClockwise(lotLine.path, center);
        lotLines.push(lotLine);
      }
    });
    return lotLines;
  }

  // 👀 https://stackoverflow.com/questions/6989100/sort-points-in-clockwise-order
  private sortPathCounterClockwise(points: LatLon[], center: LatLon): void {
    points.sort(
      (a, b) =>
        (b.lon - center.lon) * (a.lat - center.lat) -
        (a.lon - center.lon) * (b.lat - center.lat)
    );
  }
}
