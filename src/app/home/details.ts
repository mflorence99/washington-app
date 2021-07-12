import { DESC_BY_USAGE } from '../state/lots';
import { GoogleService } from '../services/google';
import { Lot } from '../state/parcels';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-details',
  template: `<section (resized)="resize($event)">
    <header class="header">
      <h1>{{ lot.id }} &bull; {{ lot.address }}</h1>
    </header>

    <article class="map">
      <google-map
        *ngIf="api.ready$ | async"
        [options]="mapOptions"
        height="100%"
        width="100%"
      >
      </google-map>
    </article>

    <article class="table">
      <table>
        <tbody>
          <tr>
            <td>Area</td>
            <td>{{ lot.area | number: '1.0-1' }} acres</td>
          </tr>
          <tr>
            <td>Land Use</td>
            <td>{{ useDescription() }}</td>
          </tr>
          <tr>
            <td>CAMA Year</td>
            <td>{{ lot.yearOfCAMA }}</td>
          </tr>
          <tr>
            <td>Land Value</td>
            <td>{{ lot.valueOfLand | currency: 'USD':'symbol':'1.0-0' }}</td>
          </tr>
          <tr>
            <td>Improv Value</td>
            <td>
              {{ lot.valueOfImprovement | currency: 'USD':'symbol':'1.0-0' }}
            </td>
          </tr>
          <tr>
            <td>Parcel Value</td>
            <td>
              {{ lot.valueOfParcel | currency: 'USD':'symbol':'1.0-0' }}
            </td>
          </tr>
          <tr>
            <td>Last Update</td>
            <td>{{ lot.updatedAt | date }}</td>
          </tr>
        </tbody>
      </table>
    </article>

    <div class="filler">&nbsp;</div>

    <footer class="footer">
      <a [href]="googleLink()" target="_blank">View on Google Maps</a>
      <ion-button (click)="dismiss()" [strong]="true" color="primary"
        >Done</ion-button
      >
    </footer>
  </section>`
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

  useDescription(): string {
    return DESC_BY_USAGE[this.lot.usage];
  }
}
