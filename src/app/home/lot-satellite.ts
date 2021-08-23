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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-lot-satellite',
  styleUrls: ['./lot-satellite.scss'],
  templateUrl: './lot-satellite.html'
})
export class LotSatelliteComponent {
  bbox: Rectangle = {
    bottom: 0,
    left: 0,
    top: 0,
    right: 0
  };

  center: LatLon;

  @Input()
  get lot(): Lot {
    return this.lotImpl;
  }
  // 👇 this avoids the map showing Google HQ first
  set lot(lot: Lot) {
    this.lotImpl = lot;
    this.bbox = this.geometry.bboxOfLot(lot);
    this.center = this.geometry.bboxCenter(this.bbox);
    this.mapOptions.center = { lat: this.center.lat, lng: this.center.lon };
  }

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    mapTypeControl: false,
    mapTypeId: 'satellite'
  };

  mapURL = '';

  @Input()
  get staticMap(): boolean {
    return this.staticMapImpl;
  }
  set staticMap(state: boolean) {
    this.staticMapImpl = state;
    if (state) {
      this.mapURL = `https://maps.googleapis.com/maps/api/staticmap?key=${this.params.google.apiKey}&size=${this.staticMapWidth}x${this.staticMapHeight}&markers=${this.center.lat},${this.center.lon}&visible=${this.bbox.top},${this.bbox.left}|${this.bbox.bottom},${this.bbox.right}&maptype=satellite`;
    }
  }

  @Input() staticMapHeight: number;
  @Input() staticMapWidth: number;

  private lotImpl: Lot;
  private staticMapImpl: boolean;

  constructor(
    public api: GoogleService,
    private geometry: GeometryService,
    private params: Params
  ) {}

  // 👇 no need to overthink this -- Google will center the bbox
  // in its viewport, which we've done ourselves for the lot lines
  resize(_event: ResizedEvent): void {
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
  }
}
