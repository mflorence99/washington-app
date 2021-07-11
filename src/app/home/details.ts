import { Lot } from '../state/parcels';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-details',
  template: `<section (resized)="resize($event)">
    <header class="header">
      <h1>Lot {{ lot.id }} &mdash; {{ lot.address }}</h1>
    </header>

    <article class="map">
      <google-map
        *ngIf="apiLoaded | async"
        [options]="mapOptions"
        height="100%"
        width="100%"
      >
      </google-map>
    </article>

    <article class="table"></article>

    <footer class="footer">Last updated: {{ lot.updatedAt | date }}</footer>
  </section>`
})
export class DetailsComponent implements OnInit {
  apiLoaded: Observable<boolean>;

  @HostBinding('class') cssClass: 'landscape' | 'portrait' | 'square' =
    'square';

  @Input() lot: Lot;

  // TODO: import @types/google
  mapOptions = {};

  constructor(http: HttpClient) {
    this.apiLoaded = http
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCAYavpwIUZOayj72XA3AZYJeYjlVscqvk',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {
    this.mapOptions = {
      // TODO: aaaargh! we picked "lon" when we should've picked "lng"
      center: { lat: this.lot.centers[0].lat, lng: this.lot.centers[0].lon },
      disableDefaultUI: false,
      fullscreenControl: false,
      keyboardShortcuts: false,
      mapTypeId: 'hybrid'
    };
  }

  resize(event: ResizedEvent): void {
    if (event.newWidth === event.newHeight) this.cssClass = 'square';
    else if (event.newWidth > event.newHeight) this.cssClass = 'landscape';
    else if (event.newWidth < event.newHeight) this.cssClass = 'portrait';
  }
}
