import { GeometryService } from '../services/geometry';
import { LatLon } from '../services/geometry';
import { Lot } from '../state/parcels';
import { LOTS } from '../state/parcels';
import { Map } from '../state/maps';
import { OverlayState } from '../state/overlay';
import { TileContainer } from '../state/tiles';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';

// 👉 all the MutationObserver trickery is to tell when polygons are loaded

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-lots',
  templateUrl: './lots.svg'
})
export class LotsComponent implements OnDestroy, OnInit {
  #mo: MutationObserver | null = null;

  lots: Lot[] = LOTS;

  @Output() lotsLoaded = new EventEmitter<string>();

  @Input() map: Map | null = null;
  @Input() mapID: string | null = null;
  @Input() tileContainer: TileContainer | null = null;

  constructor(private geometry: GeometryService, private host: ElementRef) {}

  ngOnDestroy(): void {
    this.#mo?.disconnect();
  }

  ngOnInit(): void {
    this.#mo = new MutationObserver(this.mutationCallback.bind(this));
    this.#mo.observe(this.host.nativeElement, {
      attributes: true,
      attributeFilter: ['mapID'],
      subtree: true
    });
  }

  points(boundary: LatLon[]): string {
    return boundary
      .map((point: LatLon) => {
        const { x, y } = this.geometry.latlon2xy(point);
        return `${x},${y}`;
      })
      .join(' ');
  }

  quantizeArea(area: number): string {
    return OverlayState.quantizeArea(area);
  }

  quantizeWidth(width: number): string {
    return OverlayState.quantizeWidth(width);
  }

  private mutationCallback(mutations: MutationRecord[]): void {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        const target = mutation.target as SVGElement;
        const mapID = target.getAttribute('mapID');
        if (mapID) {
          console.log(`%cPolygons ready for mapID ${mapID}`, 'color: plum');
          this.lotsLoaded.emit(mapID);
        }
      }
    });
  }
}
