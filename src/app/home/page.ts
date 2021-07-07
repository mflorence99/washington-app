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
          <ion-title>{{ model.snapshot.map.title }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content [fullscreen]="true" [scrollX]="false" [scrollY]="false">
        <img
          #theMap
          (pan)="translate($event)"
          (panend)="translateInit()"
          (panstart)="translateInit()"
          [src]="model.snapshot.map.src"
        />
        <app-lots></app-lots>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
          <ion-searchbar
            [animated]="true"
            (ionChange)="xxx($event)"
          ></ion-searchbar>
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

  // NOTE: not currently used
  scale(event: HammerInput): void {
    if (this.zoom) {
      const element = this.theMap.nativeElement;
      const minX = element.parentElement.offsetWidth / element.offsetWidth;
      const minY = element.parentElement.offsetHeight / element.offsetHeight;
      const minScale = Math.max(minX, minY);
      // clamp scale to what fits in container
      const scale = Math.min(1, Math.max(minScale, event.scale * this.zoom));
      if (this.zoom !== scale)
        this.view.scale(scale, [event.center.x, event.center.y]);
    }
  }

  switchTo(map: Map): void {
    this.view.translate([0, 0]);
    this.model.switchTo(map);
    this.xlate = null;
    this.zoom = null;
  }

  translate(event: HammerInput): void {
    if (this.xlate) {
      const element = this.theMap.nativeElement;
      let translateX = event.deltaX / this.zoom + this.xlate[0];
      const maxX =
        (element.parentElement.offsetWidth - element.offsetWidth * this.zoom) /
        this.zoom;
      let translateY = event.deltaY / this.zoom + this.xlate[1];
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

  translateInit(): void {
    this.xlate = this.view.snapshot.translate;
    this.zoom = this.view.snapshot.scale;
  }

  xxx(event): void {
    console.log(event);
  }
}
