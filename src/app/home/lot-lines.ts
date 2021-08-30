import { GeometryService } from '../services/geometry';
import { LatLon } from '../services/geometry';
import { Lot } from '../state/parcels';
import { Params } from '../services/params';
import { Rectangle } from '../services/geometry';
import { XY } from '../services/geometry';

import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
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
  selector: 'app-lot-lines',
  styleUrls: ['./lot-lines.scss'],
  templateUrl: './lot-lines.svg'
})
export class LotLinesComponent {
  bbox: Rectangle = {
    bottom: 0,
    left: 0,
    top: 0,
    right: 0
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

  @Input()
  get lot(): Lot {
    return this.lotImpl;
  }
  // 👇 this avoids the map showing Google HQ first
  set lot(lot: Lot) {
    this.lotImpl = lot;
    this.bbox = this.geometry.bboxOfLot(lot);
    this.center = this.geometry.bboxCenter(this.bbox);
  }

  lotLines: LotLine[] = [];

  private lotImpl: Lot;

  constructor(
    private cdf: ChangeDetectorRef,
    private geometry: GeometryService,
    private params: Params
  ) {}

  latlon2xy(latlon: LatLon): XY {
    return this.geometry.latlon2xy(latlon, this.bbox, this.dims);
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

  render(cx: number, cy: number): void {
    this.bbox = this.geometry.bboxOfLot(this.lot);

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
      height: cy - margin * 2,
      left: margin,
      top: margin,
      width: cx - margin * 2
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

    // 👇 the hard part!
    this.lotLines = this.makeLotLines();
    this.cdf.markForCheck();
  }

  // 👇 we don't want the commas that the DecimalPipe introduces
  round(value: number): number {
    return Math.round(value);
  }

  private isLineReallyShort(length: number): boolean {
    const threshold = this.params.home.lot.shortLineThreshold;
    return length * this.ft2px < threshold;
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

      if (lotLine.path.length > 0) lotLines.push(lotLine);
    });
    return lotLines;
  }
}
