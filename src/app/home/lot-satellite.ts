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
  set lot(lot: Lot) {
    this.lotImpl = lot;
    this.bbox = this.geometry.bboxOfLot(lot);
    this.center = this.geometry.bboxCenter(this.bbox);
    // 👇 this avoids the map showing Google HQ first
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
      this.mapURL = `https://maps.googleapis.com/maps/api/staticmap?key=${
        this.params.google.apiKey
      }&size=${this.staticMapWidth}x${
        this.staticMapHeight
      }${this.makePaths().join('')}&maptype=terrain`;
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
  //    in its viewport, which we've done ourselves for the lot lines
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
      // 👇 overlay the map with the lotlines
      const lotLines = this.lot.boundaries.map(
        (latlons) =>
          new google.maps.Polyline({
            path: latlons.map(({ lat, lon }) => ({ lat, lng: lon })),
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 3
          })
      );
      lotLines.forEach((lotLine) => lotLine.setMap(this.map.googleMap));
    }
  }

  // 👇 for the static map
  private makePaths(): string[] {
    return this.lot.boundaries.map((latlons) => {
      const path = latlons.map(({ lat, lon }) => [lat, lon]);
      return `&path=color:0xFF0000FF|weight:3|enc:${encode(path, 5)}`;
    });
  }
}
