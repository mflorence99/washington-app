import { DESC_BY_USAGE } from '../state/parcels';
import { DESC_BY_USE } from '../state/parcels';
import { DetailsType } from '../state/model';
import { GeometryService } from '../services/geometry';
import { Lot } from '../state/parcels';
import { ModelState } from '../state/model';
import { Params } from '../services/params';
import { PDFService } from '../services/pdf';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { ResizedEvent } from 'angular-resize-event';
import { ViewEncapsulation } from '@angular/core';

// 👇 all the dimensions associated with printing are hacks for the PDF

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

  orientation: 'landscape' | 'portrait' | 'square' | 'pdf' = 'square';

  staticMap = false;
  staticMapHeight = 480;
  staticMapWidth = 480;

  private screen = {
    height: '',
    orientation: '',
    width: ''
  };

  constructor(
    public geometry: GeometryService,
    private host: ElementRef,
    private mc: ModalController,
    public model: ModelState,
    private params: Params,
    private pdf: PDFService,
    private platform: Platform
  ) {
    // correct for earlier version where model.details not set
    if (!this.model.details) this.model.detailsTo('assessor');
  }

  @HostBinding('class') get cssClass(): string {
    return `${this.orientation} ${this.model.details}`;
  }

  canPrint(): boolean {
    return (
      this.platform.is('desktop') ||
      (!this.platform.is('android') &&
        !this.platform.is('ios') &&
        !this.platform.is('ipad') &&
        !this.platform.is('iphone'))
    );
  }

  detailsTo(type: DetailsType): void {
    this.model.detailsTo(type);
  }

  dismiss(): void {
    this.mc.dismiss();
  }

  // 🔥 experimental
  print(): void {
    const style = this.host.nativeElement.closest('ion-modal').style;
    this.screen.orientation = this.orientation;
    this.screen.height = style.getPropertyValue('--height');
    this.screen.width = style.getPropertyValue('--width');
    this.staticMap = true;
    // 👇 make the popup look like we want for PDF
    this.orientation = 'pdf';
    style.setProperty('--height', '816px');
    style.setProperty('--width', '1056px');
    // 👇 once we've settled down, create the PDF
    setTimeout(() => {
      this.pdf
        .create(this.host.nativeElement, `${this.lot.id}.pdf`)
        .then(() => {})
        .catch(console.error)
        .finally(() => {
          // put it all back the way we found it
          this.orientation = this.screen.orientation as any;
          style.setProperty('--height', this.screen.height);
          style.setProperty('--width', this.screen.width);
          this.staticMap = false;
        });
    }, this.params.home.details.printDelay);
  }

  resize(event: ResizedEvent): void {
    if (this.orientation !== 'pdf') {
      if (event.newWidth === event.newHeight) this.orientation = 'square';
      else if (event.newWidth > event.newHeight) this.orientation = 'landscape';
      else if (event.newWidth < event.newHeight) this.orientation = 'portrait';
    }
  }

  usageDescription(): string {
    return DESC_BY_USAGE[this.lot.usage];
  }

  useDescription(): string {
    return DESC_BY_USE[this.lot.use];
  }
}
