import { DESC_BY_USAGE } from '../state/parcels';
import { DESC_BY_USE } from '../state/parcels';
import { DetailsType } from '../state/model';
import { GeometryService } from '../services/geometry';
import { Lot } from '../state/parcels';
import { ModelState } from '../state/model';

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
export class DetailsComponent {
  @Input() lot: Lot;

  orientation: 'landscape' | 'portrait' | 'square' = 'square';

  constructor(
    public geometry: GeometryService,
    private mc: ModalController,
    public model: ModelState
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
