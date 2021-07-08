import { Map } from '../state/maps';
import { MAPS } from '../state/maps';
import { ModelState } from '../state/model';
import { ViewState } from '../state/view';

import { Component } from '@angular/core';
import { Components } from '@ionic/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

// NOTE: we tried to support pinch to zoom but it wasn't satisfactory

@Component({
  selector: 'app-home',
  template: `
    <ion-menu #menu content-id="theContent" side="start">
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
            <ion-menu-button color="dark"></ion-menu-button>
          </ion-buttons>

          <ion-title>{{ model.map.title }}</ion-title>

          <ion-buttons slot="end">
            <ion-button
              (click)="scaleUp()"
              [disabled]="view.view.scale >= maxScale()"
              color="dark"
              shape="round"
              ><ion-icon name="add-circle"></ion-icon
            ></ion-button>
            <ion-button
              (click)="scaleDown()"
              [disabled]="view.view.scale <= minScale()"
              color="dark"
              shape="round"
              ><ion-icon name="remove-circle"></ion-icon
            ></ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content [fullscreen]="true" [scrollX]="false" [scrollY]="false">
        <img
          #map
          (load)="loading = false"
          (pan)="translate($event)"
          (panend)="gestureInit()"
          (panstart)="gestureInit()"
          [src]="model.map.src"
          class="map"
        />

        <svg-icon [src]="model.map.lots" svgClass="lots"></svg-icon>
      </ion-content>

      <article [ngClass]="{ loading: loading }">
        <ion-icon name="timer"></ion-icon>
      </article>

      <ion-footer>
        <ion-toolbar>
          <ion-searchbar [animated]="true"></ion-searchbar>
        </ion-toolbar>
      </ion-footer>
    </main>
  `
})
export class HomePage {
  @ViewChild('map') map: ElementRef<HTMLImageElement>;
  @ViewChild('menu') menu: Components.IonMenu;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  loading = true;
  maps: Map[] = MAPS;

  private xlate: [number, number];
  private zoom: number;

  constructor(public model: ModelState, public view: ViewState) {}

  gestureInit(): void {
    this.xlate = this.view.view.translate;
    this.zoom = this.view.view.scale;
  }

  maxScale(): number {
    return 2;
  }

  minScale(): number {
    const element = this.map?.nativeElement;
    if (element) {
      const minX = element.parentElement.offsetWidth / element.offsetWidth;
      const minY = element.parentElement.offsetHeight / element.offsetHeight;
      return Math.max(minX, minY);
    } else return 0;
  }

  // NOTE: this was designed to be called by the pinch event
  scale({ scale, center }): void {
    if (this.zoom) {
      const zoom = Math.min(
        this.maxScale(),
        Math.max(this.minScale(), scale * this.zoom)
      );
      this.view.scale(zoom, [center.x, center.y]);
    }
  }

  scaleDown(): void {
    this.gestureInit();
    this.scale({ scale: 0.9, center: { x: 0, y: 0 } });
  }

  scaleUp(): void {
    this.gestureInit();
    this.scale({ scale: 1.1, center: { x: 0, y: 0 } });
  }

  switchTo(map: Map): void {
    this.loading = true;
    this.menu.close(true);
    this.model.switchTo(map);
    this.xlate = null;
    this.zoom = null;
  }

  translate({ deltaX, deltaY }): void {
    if (this.xlate) {
      const element = this.map.nativeElement;
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
      // if (this.xlate[0] !== translateX && this.xlate[1] !== translateY)
      this.view.translate([translateX, translateY]);
    }
  }
}
