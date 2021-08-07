import { DESC_BY_USAGE } from '../state/parcels';
import { DESC_BY_USE } from '../state/parcels';
import { GoogleService } from '../services/google';
import { Lot } from '../state/parcels';

import { AfterViewInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { HostBinding } from '@angular/core';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResizedEvent } from 'angular-resize-event';
import { ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  // NOTE: need Default to change SVG attributes
  changeDetection: ChangeDetectionStrategy.Default,
  // NOTE: so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-details',
  styleUrls: ['./details.scss'],
  templateUrl: './details.html'
})
export class DetailsComponent implements AfterViewInit {
  @HostBinding('class') cssClass: 'landscape' | 'portrait' | 'square' =
    'square';

  @Input() lot: Lot;

  @ViewChild(GoogleMap) map: GoogleMap;

  mapOptions: google.maps.MapOptions = {};

  constructor(public api: GoogleService, private mc: ModalController) {}

  dismiss(): void {
    this.mc.dismiss();
  }

  // NOTE: not currently used; instead you can click "Google" on the map
  googleLink(): string {
    return `https://www.google.com/maps/@?api=1&map_action=map&center=${this.lot.centers[0].lat}%2c${this.lot.centers[0].lon}&basemap=satellite&zoom=16`;
  }

  ngAfterViewInit(): void {
    this.mapOptions = {
      // NOTE: Google uses "lng" when we picked "lon"
      center: { lat: this.lot.centers[0].lat, lng: this.lot.centers[0].lon },
      disableDefaultUI: false,
      fullscreenControl: false,
      keyboardShortcuts: false,
      mapTypeControl: false,
      mapTypeId: 'hybrid',
      zoom: 15
    };
  }

  resize(event: ResizedEvent): void {
    if (event.newWidth === event.newHeight) this.cssClass = 'square';
    else if (event.newWidth > event.newHeight) this.cssClass = 'landscape';
    else if (event.newWidth < event.newHeight) this.cssClass = 'portrait';
  }

  usageDescription(): string {
    return DESC_BY_USAGE[this.lot.usage];
  }

  useDescription(): string {
    return DESC_BY_USE[this.lot.use];
  }
}
