import { Map } from '../state/maps';
import { MAPS } from '../state/maps';
import { ModelState } from '../state/model';
import { ViewState } from '../state/view';

import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

// NOTE: we tried to support pinch to zoom but it wasn't satisfactory

@Component({
  selector: 'app-home',
  template: ` <ion-menu side="start" content-id="theContent">
      <ion-header>
        <ion-toolbar>
          <ion-title>Maps</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list *ngFor="let map of maps">
          <ion-item button (click)="switchTo(map)">
            <ion-icon name="map" slot="start"></ion-icon>
            <ion-label>{{ map.title }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <main class="ion-page" id="theContent">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>{{ model.map.title }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content [fullscreen]="true" [scrollX]="false" [scrollY]="false">
        <img
          #theMap
          (pan)="translate($event)"
          (panend)="gestureInit()"
          (panstart)="gestureInit()"
          (pinch)="scale($event)"
          (pinchend)="gestureInit()"
          (pinchstart)="gestureInit()"
          [src]="model.map.src"
        />
        <app-lots></app-lots>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
          <ion-searchbar [animated]="true"></ion-searchbar>
        </ion-toolbar>
      </ion-footer>
    </main>`
})
export class HomePage {
  maps: Map[] = MAPS;

  @ViewChild('theMap') theMap: ElementRef<HTMLImageElement>;

  private xlate: [number, number];
  private zoom: number;

  constructor(public model: ModelState, public view: ViewState) {}

  gestureInit(): void {
    this.xlate = this.view.view.translate;
    this.zoom = this.view.view.scale;
  }

  // NOTE: doesn't really work
  scale({ scale, center }): void {
    if (this.zoom) {
      const element = this.theMap.nativeElement;
      const minX = element.parentElement.offsetWidth / element.offsetWidth;
      const minY = element.parentElement.offsetHeight / element.offsetHeight;
      const minScale = Math.max(minX, minY);
      // clamp scale to what fits in container
      const zoom = Math.min(1, Math.max(minScale, scale * this.zoom));
      if (this.zoom !== zoom) this.view.scale(zoom, [center.x, center.y]);
    }
  }

  switchTo(map: Map): void {
    this.model.switchTo(map);
    this.xlate = null;
    this.zoom = null;
  }

  translate({ deltaX, deltaY }): void {
    if (this.xlate) {
      const element = this.theMap.nativeElement;
      let translateX = deltaX / this.zoom + this.xlate[0];
      const maxX =
        (element.parentElement.offsetWidth - element.offsetWidth * this.zoom) /
        this.zoom;
      let translateY = deltaY / this.zoom + this.xlate[1];
      const maxY =
        (element.parentElement.offsetHeight -
          element.offsetHeight * this.zoom) /
        this.zoom;
      // clamp translation to what fits in container
      translateX = Math.max(maxX, Math.min(0, translateX));
      translateY = Math.max(maxY, Math.min(0, translateY));
      if (this.xlate[0] !== translateX && this.xlate[1] !== translateY)
        this.view.translate([translateX, translateY]);
    }
  }
}
