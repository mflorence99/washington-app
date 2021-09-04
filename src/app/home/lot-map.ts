import { GeometryService } from '../services/geometry';
import { GoogleService } from '../services/google';
import { Lot } from '../state/parcels';
import { LOT_BY_ID } from '../state/parcels';
import { Params } from '../services/params';
import { Rectangle } from '../services/geometry';
import { SelectionState } from '../state/selection';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { encode } from '@googlemaps/polyline-codec';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-lot-map',
  styleUrls: ['./lot-map.scss'],
  templateUrl: './lot-map.html'
})
export class LotMapComponent {
  #lot: Lot;
  #mapType: string;
  #staticMap: boolean;

  abutterOptions: google.maps.PolylineOptions = {
    strokeColor: this.params.common.lotAbutterColor,
    strokeWeight: this.params.common.lotOutlineWidth
  };

  bbox: Rectangle;

  @Output() boundsChanged = new EventEmitter<google.maps.LatLngBounds>();

  @Input()
  get lot(): Lot {
    return this.#lot;
  }
  set lot(lot: Lot) {
    this.#lot = lot;
    this.bbox = this.geometry.bboxOfLot(lot);
  }

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    mapTypeControl: true
  };

  mapURL = '';

  markerOptions: google.maps.MarkerOptions = {
    icon: {
      path: google.maps.SymbolPath.CIRCLE
    }
  };

  @Input()
  get mapType(): string {
    return this.#mapType;
  }
  set mapType(mapType: string) {
    this.#mapType = mapType;
    this.mapOptions.mapTypeId = this.mapType;
  }

  // 👇 these keep maps in sync as we flip between details type
  @Input() preferredBounds: google.maps.LatLngBounds;
  @Input() preferredZoom: number;

  @Input()
  get staticMap(): boolean {
    return this.#staticMap;
  }
  set staticMap(state: boolean) {
    this.#staticMap = state;
    if (state) {
      this.mapURL = `https://maps.googleapis.com/maps/api/staticmap?key=${this.params.google.apiKey}&size=${this.staticMapWidth}x${this.staticMapHeight}&visible=${this.bbox.top},${this.bbox.left}|${this.bbox.bottom},${this.bbox.right}&maptype=${this.mapType}`;
      // 👇 overlay lot lines
      const params = this.params.common;
      this.mapURL += this.outlines(this.lot)
        .map((outline) => {
          const path = outline.map(({ lat, lng }) => [lat, lng]);
          return `&path=color:${params.lotOutlineColorEncoded}|weight:${
            params.lotOutlineWidth
          }|enc:${encode(path, 5)}`;
        })
        .join('');
    }
  }

  @Input() staticMapHeight: number;
  @Input() staticMapWidth: number;

  @Output() zoomChanged = new EventEmitter<number>();

  constructor(
    public api: GoogleService,
    private geometry: GeometryService,
    private params: Params,
    public selection: SelectionState
  ) {}

  abutters(): Lot[] {
    return (this.lot.abutters ?? [])
      .filter((id) => !!LOT_BY_ID[id])
      .map((id) => LOT_BY_ID[id]);
  }

  centers(lot: Lot): google.maps.LatLngLiteral[] {
    return lot.centers.map(({ lat, lon }) => ({ lat, lng: lon }));
  }

  markerLabel(lot: Lot): google.maps.MarkerLabel {
    return {
      color: ['satellite', 'hybrid'].includes(this.mapType) ? 'white' : 'black',
      fontFamily: 'monospace',
      text: lot.id
    };
  }

  outlines(lot: Lot): google.maps.LatLngLiteral[][] {
    return lot.boundaries.map((latlons) =>
      latlons.map(({ lat, lon }) => ({ lat, lng: lon }))
    );
  }

  resize(_event: ResizedEvent): void {
    if (this.map) {
      const bounds = new google.maps.LatLngBounds(
        {
          lat: this.bbox.bottom,
          lng: this.bbox.left
        },
        {
          lat: this.bbox.top,
          lng: this.bbox.right
        }
      );
      this.map.fitBounds(this.preferredBounds ?? bounds);
      this.map.panToBounds(this.preferredBounds ?? bounds);
      if (this.preferredZoom) this.map.googleMap.setZoom(this.preferredZoom);
    }
  }
}
