import { DESC_BY_USAGE } from '../state/parcels';
import { DESC_BY_USE } from '../state/parcels';
import { DestroyService } from '../services/destroy';
import { DetailsType } from '../state/model';
import { GeometryService } from '../services/geometry';
import { Lot } from '../state/parcels';
import { LOT_BY_ID } from '../state/parcels';
import { ModelState } from '../state/model';
import { Params } from '../services/params';
import { PDFService } from '../services/pdf';
import { SelectionState } from '../state/selection';

import { Actions } from '@ngxs/store';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ResizedEvent } from 'angular-resize-event';
import { ViewEncapsulation } from '@angular/core';

import { filter } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

// 👇 all the dimensions associated with printing are hacks for the PDF

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService],
  selector: 'app-details',
  styleUrls: ['./details.scss'],
  templateUrl: './details.html'
})
export class DetailsComponent implements OnInit {
  @Input() lot: Lot;

  orientation: 'landscape' | 'portrait' | 'pdf' = 'portrait';

  // 👇 these keep maps in sync as we flip between details type
  preferredBounds: google.maps.LatLngBounds;
  preferredZoom: number;

  staticMapHeight = this.params.home.details.pdf.mapHeight;
  staticMapWidth = this.params.home.details.pdf.mapWidth;

  constructor(
    private actions$: Actions,
    private destroy$: DestroyService,
    public geometry: GeometryService,
    private host: ElementRef,
    private mc: ModalController,
    public model: ModelState,
    private params: Params,
    private pdf: PDFService,
    private platform: Platform,
    public selection: SelectionState
  ) {
    // correct for earlier version where model.details not set
    if (!this.model.details) this.model.detailsTo('assessor');
  }

  #handleActions$(): void {
    this.actions$
      .pipe(
        takeUntil(this.destroy$),
        filter(({ status }) => status === 'SUCCESSFUL')
      )
      .subscribe(({ action }) => {
        this.#handleSelectionSelectAbutters(action);
      });
  }

  #handleSelectionSelectAbutters(action: Object): void {
    if (action['SelectionState.selectAbutters']) {
      // 👇 when the render has settled down, scroll the first
      //    highlighted row into view
      setTimeout(() => {
        const row = this.host.nativeElement.querySelector(
          '.table.abutters tr.highlighted'
        );
        if (row)
          row.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
            scrollMode: 'if-needed'
          });
      }, 0);
    }
  }

  @HostBinding('class') get cssClass(): string {
    return `${this.orientation} ${this.model.details}`;
  }

  abutters(): Lot[] {
    return (this.lot.abutters ?? [])
      .filter((id) => !!LOT_BY_ID[id])
      .map((id) => LOT_BY_ID[id])
      .sort((p, q) => p.id.localeCompare(q.id));
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

  ngOnInit(): void {
    this.#handleActions$();
  }

  print(): void {
    const style = this.host.nativeElement.closest('ion-modal').style;
    // 👇 height & width are Ionic properties
    const screen = {
      height: style.getPropertyValue('--height'),
      orientation: this.orientation,
      width: style.getPropertyValue('--width')
    };
    // 👇 make the popup look like we want for PDF
    this.orientation = 'pdf';
    const params = this.params.home.details.pdf;
    style.setProperty('--height', `${params.pageHeight}px`);
    style.setProperty('--width', `${params.pageHeight}px`);
    style.setProperty('--pdf-map-height', `${params.mapHeight}px`);
    style.setProperty('--pdf-map-width', `${params.mapHeight}px`);
    style.setProperty('--pdf-header-width', `${params.headerWidth}px`);
    style.setProperty('--pdf-mark-width', `${params.markWidth}px`);
    // 👇 once we've settled down, create the PDF
    setTimeout(() => {
      this.pdf
        .create(this.host.nativeElement, `${this.lot.id}.pdf`)
        .then(() => {})
        .catch(console.error)
        .finally(() => {
          // put it all back the way we found it
          this.orientation = screen.orientation as any;
          style.setProperty('--height', screen.height);
          style.setProperty('--width', screen.width);
        });
    }, this.params.home.details.printDelay);
  }

  resize(event: ResizedEvent): void {
    if (this.orientation !== 'pdf') {
      if (event.newWidth > event.newHeight) this.orientation = 'landscape';
      else if (event.newWidth <= event.newHeight) this.orientation = 'portrait';
    }
  }

  usageDescription(): string {
    return DESC_BY_USAGE[this.lot.usage];
  }

  useDescription(): string {
    return DESC_BY_USE[this.lot.use];
  }
}
