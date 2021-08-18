import { GeometryService } from '../services/geometry';
import { GoogleService } from '../services/google';
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

  @Input() lot: Lot;

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    mapTypeControl: false,
    mapTypeId: 'satellite'
  };

  constructor(
    public api: GoogleService,
    private geometry: GeometryService,
    private params: Params
  ) {}

  resize(_event: ResizedEvent): void {
    this.bbox = this.geometry.bboxOfLot(this.lot);
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
  }
}
