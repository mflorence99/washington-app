import { DestroyService } from '../services/destroy';
import { GeometryService } from '../services/geometry';
import { GoogleService } from '../services/google';
import { Lot } from '../state/parcels';
import { LOT_BY_ID } from '../state/parcels';
import { Params } from '../services/params';
import { Rectangle } from '../services/geometry';
import { SelectionState } from '../state/selection';

import { Actions } from '@ngxs/store';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { encode } from '@googlemaps/polyline-codec';
import { filter } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService],
  selector: 'app-lot-map',
  styleUrls: ['./lot-map.scss'],
  templateUrl: './lot-map.html'
})
export class LotMapComponent implements OnInit {
  #lot: Lot = new Lot();
  #mapType = 'roadmap';
  #staticMap = false;

  abutterOptions: google.maps.PolygonOptions[] = [];

  abutters: Lot[] = [];

  bbox: Rectangle = new Rectangle();

  @Output() boundsChanged = new EventEmitter<google.maps.LatLngBounds>();

  @Input()
  get lot(): Lot {
    return this.#lot;
  }
  set lot(lot: Lot) {
    this.#lot = lot;
    this.bbox = this.geometry.bboxOfLot(lot);
    // 👇 this prevents Google HQ showing as map!
    const { lat, lon } = this.geometry.latlonCenterOfLots([lot]);
    this.mapOptions.center = { lat, lng: lon };
    // 👇 build the list of abutters
    this.abutters = (lot.abutters ?? [])
      .filter((id) => !!LOT_BY_ID[id])
      .map((id) => LOT_BY_ID[id]);
    this.abutterOptions = this.abutters.map((abutter) => ({
      id: abutter.id,
      fillColor: this.params.common.lotAbutterColor,
      fillOpacity: 0,
      strokeColor: this.params.common.lotAbutterColor,
      strokeWeight: this.params.common.lotOutlineWidth
    }));
  }

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap | null = null;

  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    mapTypeControl: false
  };

  mapURL = '';

  markerOptions: google.maps.MarkerOptions = {
    icon: {
      path: google.maps.SymbolPath.CIRCLE
    }
  };

  @Input()
  get mapType(): string {
    return this.#mapType;
  }
  set mapType(mapType: string) {
    this.#mapType = mapType;
    this.mapOptions.mapTypeId = this.mapType;
  }

  // 👇 these keep maps in sync as we flip between details type
  @Input() preferredBounds: google.maps.LatLngBounds | null = null;
  @Input() preferredZoom = 0;

  @Input()
  get staticMap(): boolean {
    return this.#staticMap;
  }
  set staticMap(state: boolean) {
    this.#staticMap = state;
    if (state) {
      this.mapURL = `https://maps.googleapis.com/maps/api/staticmap?key=${this.params.google.apiKey}&size=${this.staticMapWidth}x${this.staticMapHeight}&visible=${this.bbox.top},${this.bbox.left}|${this.bbox.bottom},${this.bbox.right}&maptype=${this.mapType}`;
      // 👇 overlay lot lines
      const params = this.params.common;
      this.mapURL += this.outlines(this.lot)
        .map((outline) => {
          const path = outline.map(({ lat, lng }) => [lat, lng]);
          return `&path=color:${params.lotOutlineColorEncoded}|weight:${
            params.lotOutlineWidth
          }|enc:${encode(path, 5)}`;
        })
        .join('');
    }
  }

  @Input() staticMapHeight = 0;
  @Input() staticMapWidth = 0;

  @Output() zoomChanged = new EventEmitter<number>();

  constructor(
    private actions$: Actions,
    public api: GoogleService,
    private destroy$: DestroyService,
    private cdf: ChangeDetectorRef,
    private geometry: GeometryService,
    private params: Params,
    public selection: SelectionState
  ) {}

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

  #handleSelectionSelectAbutters(action: any): void {
    if (action['SelectionState.selectAbutters']) {
      this.abutterOptions.forEach((options: any) => {
        options.fillOpacity = this.selection.isAbutterSelected(options.id)
          ? 0.33
          : 0;
      });
      this.cdf.detectChanges();
    }
  }

  centers(lot: Lot): google.maps.LatLngLiteral[] {
    return lot.centers.map(({ lat, lon }) => ({ lat, lng: lon }));
  }

  markerLabel(lot: Lot): google.maps.MarkerLabel {
    return {
      color: ['satellite', 'hybrid'].includes(this.mapType) ? 'white' : 'black',
      fontFamily: 'monospace',
      text: lot.id
    };
  }

  ngOnInit(): void {
    this.#handleActions$();
  }

  outlines(lot: Lot): google.maps.LatLngLiteral[][] {
    return lot.boundaries.map((latlons) =>
      latlons.map(({ lat, lon }) => ({ lat, lng: lon }))
    );
  }

  resize(_event: ResizedEvent): void {
    if (this.map) {
      const bounds = new google.maps.LatLngBounds(
        {
          lat: this.bbox.bottom,
          lng: this.bbox.left
        },
        {
          lat: this.bbox.top,
          lng: this.bbox.right
        }
      );
      this.map.fitBounds(this.preferredBounds ?? bounds);
      this.map.panToBounds(this.preferredBounds ?? bounds);
      if (this.preferredZoom) this.map?.googleMap?.setZoom(this.preferredZoom);
    }
  }

  trackByAbutter(_: any, abutter: Lot): string {
    return abutter.id;
  }

  trackByIndex(ix: number): string {
    return `${ix}`;
  }
}
