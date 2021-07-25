import { DESC_BY_USAGE } from '../state/lots';
import { DESC_BY_USE } from '../state/lots';
import { GoogleService } from '../services/google';
import { Lot } from '../state/parcels';

import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { ViewEncapsulation } from '@angular/core';

@Component({
  // NOTE: so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-details',
  styleUrls: ['./details.scss'],
  templateUrl: './details.html'
})
export class DetailsComponent implements OnInit {
  @HostBinding('class') cssClass: 'landscape' | 'portrait' | 'square' =
    'square';

  @Input() lot: Lot;

  mapOptions: google.maps.MapOptions = {};

  constructor(public api: GoogleService, private mc: ModalController) {}

  dismiss(): void {
    this.mc.dismiss();
  }

  googleLink(): string {
    return `https://www.google.com/maps/@?api=1&map_action=map&center=${this.lot.centers[0].lat}%2c${this.lot.centers[0].lon}&basemap=satellite&zoom=16`;
  }

  ngOnInit(): void {
    this.mapOptions = {
      // TODO: aaaargh! we picked "lon" when we should've picked "lng"
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
