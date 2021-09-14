import { Lot } from '../state/parcels';
import { LotLinesComponent } from '../home/lot-lines';
import { Rectangle } from '../services/geometry';

import { AfterViewInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

// 👀 https://developers.google.com/maps/documentation/javascript/customoverlays

const makeCustomOverlay = (
  host: ElementRef,
  lotLinesComponent: LotLinesComponent,
  map: GoogleMap,
  bbox: Rectangle
): google.maps.OverlayView => {
  const bounds = new google.maps.LatLngBounds(
    { lat: bbox.bottom, lng: bbox.left },
    { lat: bbox.top, lng: bbox.right }
  );
  const lotLines = lotLinesComponent.host.nativeElement;

  // 👇 we can't "new" anything Google until map loaded!
  class MeasuredLotLinesOverlay extends google.maps.OverlayView {
    draw(): void {
      const projection = this.getProjection();
      const ne = projection.fromLatLngToDivPixel(bounds.getNorthEast());
      const sw = projection.fromLatLngToDivPixel(bounds.getSouthWest());
      lotLines.style.position = 'absolute';
      lotLines.style.left = `${sw.x}px`;
      lotLines.style.top = `${ne.y}px`;
      lotLines.style.width = `${ne.x - sw.x}px`;
      lotLines.style.height = `${sw.y - ne.y}px`;
      // 👇 rebuild the SVG of the lot lines, resetting the viewport
      lotLinesComponent.render(ne.x - sw.x, sw.y - ne.y);
      lotLines.firstChild.setAttribute?.('width', `${ne.x - sw.x}px`);
      lotLines.firstChild.setAttribute?.('height', `${sw.y - ne.y}px`);
    }

    onAdd(): void {
      host.nativeElement.removeChild(lotLines);
      const panes = this.getPanes();
      panes.overlayLayer.appendChild(lotLines);
      // 👇 different class depending on map type
      const setMapTypeId = (): void => {
        const mapType = map.googleMap?.getMapTypeId();
        lotLines.className = mapType;
      };
      map.googleMap?.addListener('maptypeid_changed', setMapTypeId);
      setMapTypeId();
    }

    onRemove(): void {
      lotLines.parentNode?.removeChild(lotLines);
      if (map.googleMap)
        google.maps.event.clearInstanceListeners(map.googleMap);
    }
  }

  // add the overlay to the map
  const overlay = new MeasuredLotLinesOverlay();
  if (map.googleMap) overlay.setMap(map.googleMap);
  return overlay;
};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-lot-measure',
  styleUrls: ['./lot-measure.scss'],
  templateUrl: './lot-measure.html'
})
export class LotMeasureComponent implements AfterViewInit, OnDestroy {
  #customOverlay: google.maps.OverlayView | null = null;

  @Input() bbox: Rectangle = new Rectangle();
  @Input() lot: Lot = new Lot();

  @ViewChild(LotLinesComponent, { static: true })
  lotLinesComponent: LotLinesComponent | null = null;

  @Input() mapType: google.maps.MapTypeId | null = null;

  constructor(private host: ElementRef, private map: GoogleMap) {}

  ngAfterViewInit(): void {
    if (this.lotLinesComponent) {
      this.#customOverlay = makeCustomOverlay(
        this.host,
        this.lotLinesComponent,
        this.map,
        this.bbox
      );
    }
  }

  ngOnDestroy(): void {
    this.#customOverlay?.setMap(null);
    this.#customOverlay = null;
  }
}
