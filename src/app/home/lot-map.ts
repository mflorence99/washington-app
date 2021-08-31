import { GeometryService } from '../services/geometry';
import { GoogleService } from '../services/google';
import { LatLon } from '../services/geometry';
import { Lot } from '../state/parcels';
import { Params } from '../services/params';
import { Rectangle } from '../services/geometry';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Input } from '@angular/core';
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
  bbox: Rectangle;

  bounds: google.maps.LatLngBounds;

  center: LatLon;

  @Input()
  get lot(): Lot {
    return this.lotImpl;
  }
  set lot(lot: Lot) {
    this.lotImpl = lot;
    this.bbox = this.geometry.bboxOfLot(lot);
    this.center = this.geometry.bboxCenter(this.bbox);
    // 👇 this avoids the map showing Google HQ first
    this.mapOptions.center = { lat: this.center.lat, lng: this.center.lon };
    this.outlines = this.lot.boundaries.map((latlons) =>
      latlons.map(({ lat, lon }) => ({ lat, lng: lon }))
    );
  }

  @Input() lotLinesStyle: 'none' | 'outline' | 'measure' = 'none';

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    mapTypeControl: true
  };

  @Input()
  get mapType(): google.maps.MapTypeId {
    return this.mapTypeImpl;
  }
  set mapType(mapType: google.maps.MapTypeId) {
    this.mapTypeImpl = mapType;
    this.mapOptions.mapTypeId = this.mapType;
  }

  mapURL = '';

  outlineOptions: google.maps.PolylineOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 3
  };

  outlines: google.maps.LatLngLiteral[][] = [];

  @Input()
  get staticMap(): boolean {
    return this.staticMapImpl;
  }
  set staticMap(state: boolean) {
    this.staticMapImpl = state;
    if (state) {
      this.mapURL = `https://maps.googleapis.com/maps/api/staticmap?key=${this.params.google.apiKey}&size=${this.staticMapWidth}x${this.staticMapHeight}&visible=${this.bbox.top},${this.bbox.left}|${this.bbox.bottom},${this.bbox.right}&maptype=${this.mapType}`;
      // 👇 optionally, overlay lot lines
      if (this.lotLinesStyle === 'outline') {
        this.mapURL += this.outlines
          .map((outline) => {
            const path = outline.map(({ lat, lng }) => [lat, lng]);
            return `&path=color:0xFF0000FF|weight:3|enc:${encode(path, 5)}`;
          })
          .join('');
      }
    }
  }

  @Input() staticMapHeight: number;
  @Input() staticMapWidth: number;

  private lotImpl: Lot;
  private mapTypeImpl: google.maps.MapTypeId;
  private staticMapImpl: boolean;

  constructor(
    public api: GoogleService,
    private geometry: GeometryService,
    private params: Params
  ) {}

  resize(_event: ResizedEvent): void {
    if (this.map) {
      this.bounds = new google.maps.LatLngBounds(
        {
          lat: this.bbox.top,
          lng: this.bbox.left
        },
        {
          lat: this.bbox.bottom,
          lng: this.bbox.right
        }
      );
      this.map.fitBounds(this.bounds);
      this.map.panToBounds(this.bounds);
    }
  }
}
