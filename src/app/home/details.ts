import { DESC_BY_USAGE } from '../state/parcels';
import { DESC_BY_USE } from '../state/parcels';
import { DetailsType } from '../state/model';
import { GeometryService } from '../services/geometry';
import { GoogleService } from '../services/google';
import { Lot } from '../state/parcels';
import { ModelState } from '../state/model';
import { Params } from '../services/params';

import { AfterViewInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResizedEvent } from 'angular-resize-event';
import { ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-details',
  styleUrls: ['./details.scss'],
  templateUrl: './details.html'
})
export class DetailsComponent implements AfterViewInit {
  @Input() lot: Lot;

  mapOptions: google.maps.MapOptions = {};
  orientation: 'landscape' | 'portrait' | 'square' = 'square';

  constructor(
    public api: GoogleService,
    public geometry: GeometryService,
    private mc: ModalController,
    public model: ModelState,
    private params: Params
  ) {
    // correct for earlier version where model.details not set
    if (!this.model.details) this.model.detailsTo('assessor');
  }

  @HostBinding('class') get cssClass(): string {
    return `${this.orientation} ${this.model.details}`;
  }

  detailsTo(type: DetailsType): void {
    this.model.detailsTo(type);
  }

  dismiss(): void {
    this.mc.dismiss();
  }

  ngAfterViewInit(): void {
    this.mapOptions = {
      // 👇 Google uses "lng" when we picked "lon"
      center: { lat: this.lot.centers[0].lat, lng: this.lot.centers[0].lon },
      disableDefaultUI: false,
      fullscreenControl: false,
      keyboardShortcuts: false,
      mapTypeControl: false,
      mapTypeId: this.params.home.details.mapTypeId,
      zoom: this.params.home.details.zoom
    };
  }

  resize(event: ResizedEvent): void {
    if (event.newWidth === event.newHeight) this.orientation = 'square';
    else if (event.newWidth > event.newHeight) this.orientation = 'landscape';
    else if (event.newWidth < event.newHeight) this.orientation = 'portrait';
  }

  usageDescription(): string {
    return DESC_BY_USAGE[this.lot.usage];
  }

  useDescription(): string {
    return DESC_BY_USE[this.lot.use];
  }
}
