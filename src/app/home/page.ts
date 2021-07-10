import { DESC_BY_USAGE } from '../state/lots';
import { DestroyService } from '../services/destroy';
import { Lot } from '../state/parcels';
import { Map } from '../state/maps';
import { MAPS } from '../state/maps';
import { ModelState } from '../state/model';
import { Point } from '../state/maps';
import { SelectionState } from '../state/selection';
import { ViewState } from '../state/view';

import { Actions } from '@ngxs/store';
import { Component } from '@angular/core';
import { Components } from '@ionic/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { filter } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

import centroid from 'polygon-centroid';

// NOTE: we tried to support pinch to zoom but it wasn't satisfactory

@Component({
  providers: [DestroyService],
  selector: 'app-home',
  template: `
    <ion-menu #menu content-id="theContent" side="start">
      <ion-header>
        <ion-toolbar>
          <ion-title>Maps</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list *ngFor="let map of maps; trackBy: trackByMap">
          <ion-item button (click)="switchTo(map)">
            <ion-icon name="map" slot="start"></ion-icon>
            <ion-label>{{ map.title }}</ion-label>
          </ion-item>
        </ion-list>

        <ul class="legend">
          <li *ngFor="let usage of legend()">
            <div
              class="code"
              style="background-color: var(--shade-u{{ usage[0] }})"
            >
              &nbsp;
            </div>
            &nbsp;
            <div class="desc">{{ usage[1] }}</div>
          </li>
        </ul>
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

      <ion-content
        [fullscreen]="true"
        [scrollX]="false"
        [scrollY]="false"
        class="main"
      >
        <section class="content">
          <img
            #map
            (load)="ready()"
            (pan)="translate($event)"
            (panend)="translateEnd()"
            (panstart)="translateBegin()"
            [ngClass]="{ animating: animating }"
            [src]="model.map.src"
            class="map"
          />

          <svg-icon
            [ngClass]="{ animating: animating, lots: true }"
            [src]="model.map.lots"
          ></svg-icon>
        </section>

        <ion-searchbar
          #searchbar
          (ionChange)="searchFor($event.detail.value)"
          [debounce]="500"
          [value]="selection.text"
          class="searchbar"
          enterkeyhint="Search"
          inputmode="search"
          placeholder="Lot # or address"
        ></ion-searchbar>
      </ion-content>

      <article [ngClass]="{ loading: loading }" class="backdrop">
        <ion-icon name="timer"></ion-icon>
      </article>
    </main>
  `
})
export class HomePage implements OnInit {
  @ViewChild('map') map: ElementRef<HTMLImageElement>;
  @ViewChild('menu') menu: Components.IonMenu;
  @ViewChild('searchbar') searchbar: Components.IonSearchbar;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  animating = true;
  loading = true;
  maps: Map[] = MAPS;

  private stylesheet: CSSStyleSheet;
  private xlate: [number, number];
  private zoom: number;

  constructor(
    private actions$: Actions,
    private destroy$: DestroyService,
    public model: ModelState,
    public selection: SelectionState,
    public view: ViewState
  ) {}

  legend(): [string, string][] {
    return Object.entries(DESC_BY_USAGE);
  }

  maxTranslate(): [number, number] {
    const element = this.map?.nativeElement;
    if (element) {
      const scale = this.view.view.scale;
      return [
        element.parentElement.offsetWidth - element.offsetWidth * scale,
        element.parentElement.offsetHeight - element.offsetHeight * scale
      ];
    } else return [0, 0];
  }

  minTranslate(): [number, number] {
    return [0, 0];
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

  ngOnInit(): void {
    this.handleActions$();
    this.createStylesheet();
  }

  // TODO: we have no way of tracking whether the SVG loaded
  // and this seems to cause some anomalies
  ready(): void {
    console.error(`Ready for ${this.model.map.id}`);
    this.loading = false;
    // TODO: why wait so long? why not next tick?
    setTimeout(() => {
      // make sure view is initialized
      this.initializeView();
      // re-search for any past search
      this.searchFor(this.selection.text);
    }, 500);
  }

  // NOTE: this was designed to be called by the pinch event
  scale({ scale }): void {
    if (this.zoom) {
      const zoom = Math.min(
        this.maxScale(),
        Math.max(this.minScale(), scale * this.zoom)
      );
      this.view.scale(zoom);
    }
  }

  scaleDown(): void {
    this.zoom = this.view.view.scale;
    this.scale({ scale: 0.9 });
  }

  scaleUp(): void {
    this.zoom = this.view.view.scale;
    this.scale({ scale: 1.1 });
  }

  searchFor(text: string): void {
    if (!this.loading) {
      console.error(`Searching for ${text}`);
      this.selection.searchFor(text);
    }
  }

  switchTo(map: Map): void {
    if (map.id !== this.model.map.id) {
      this.loading = true;
      this.xlate = null;
      this.zoom = null;
      this.model.switchTo(map);
    }
    this.menu.close(true);
  }

  trackByMap(index: number, map: Map): string {
    return map.id;
  }

  // NOTE: this is designed to be called by the pan event
  translate({ deltaX, deltaY }): void {
    if (this.xlate) {
      const max = this.maxTranslate();
      const min = this.minTranslate();
      const translate = [
        deltaX / this.zoom + this.xlate[0],
        deltaY / this.zoom + this.xlate[1]
      ];
      this.view.translate([
        Math.max(max[0], Math.min(min[0], translate[0])),
        Math.max(max[1], Math.min(min[1], translate[1]))
      ]);
    }
  }

  // NOTE: this is designed to be called by the panstart event
  translateBegin(): void {
    this.animating = false;
    this.xlate = this.view.view.translate;
    this.zoom = this.view.view.scale;
  }

  // NOTE: this is designed to be called by the panend event
  translateEnd(): void {
    this.animating = true;
    this.xlate = this.view.view.translate;
    this.zoom = this.view.view.scale;
  }

  // private methods

  private centerOfLots(lots: Lot[]): Point {
    // find the center of each lot
    const centers = lots.reduce((acc, lot) => {
      const polygon = document.getElementById(lot.id);
      if (polygon) {
        const raw = polygon.getAttribute('points');
        const points = raw.split(' ').map((point) => {
          const [x, y] = point.split(',');
          return { x: Number(x), y: Number(y) };
        });
        acc.push(centroid(points));
      } else console.error(`Can't find polygon for ${lot.id}`);
      return acc;
    }, []);
    // return the center of the centers
    if (centers.length === 0) return null;
    else if (centers.length === 1) return centers[0];
    else return centroid(centers);
  }

  private centerOfViewport(): Point {
    const element = this.map?.nativeElement;
    if (element) {
      return {
        x: element.parentElement.offsetWidth / 2,
        y: element.parentElement.offsetHeight / 2
      };
    } else return null;
  }

  private clearLots(): void {
    while (this.stylesheet.cssRules.length > 0) this.stylesheet.deleteRule(0);
  }

  private createStylesheet(): void {
    const style = document.createElement('style');
    document.head.appendChild(style);
    this.stylesheet = style.sheet;
  }

  private handleActions$(): void {
    this.actions$
      .pipe(
        takeUntil(this.destroy$),
        filter(({ status }) => !this.loading && status === 'SUCCESSFUL')
      )
      .subscribe(({ action }) => {
        if (
          action['ModelState.switchedTo'] ||
          action['ViewState.initialized'] ||
          action['ViewState.scaled'] ||
          action['ViewState.translated']
        ) {
          this.setProperties();
        } else if (action['SelectionState.found']) {
          const lots = action['SelectionState.found'];
          this.clearLots();
          if (lots.length > 0) this.selectLots(lots);
        }
      });
  }

  private initializeView(): void {
    const focus = this.model.map.focus;
    const midPoint = this.centerOfViewport();
    const max = this.maxTranslate();
    const min = this.minTranslate();
    const view = ViewState.defaultView();
    const translate = [
      -(Number(focus.x) - midPoint.x / view.scale) * view.scale,
      -(Number(focus.y) - midPoint.y / view.scale) * view.scale
    ];
    this.view.initialize({
      scale: view.scale,
      translate: [
        Math.max(max[0], Math.min(min[0], translate[0])),
        Math.max(max[1], Math.min(min[1], translate[1]))
      ]
    });
  }

  private selectLots(lots: Lot[]): void {
    // add rules for selected lots
    // NOTE: pay attention to globals.scss
    lots.forEach((lot) => {
      const rule = `svg-icon.lots svg g polygon[id='${lot.id}'] {
        stroke: var(--ion-color-danger);
        stroke-width: 3;
      }`;
      this.stylesheet.insertRule(rule);
    });
    // put the center of the lots in the middle of the viewport
    this.zoom = this.view.view.scale;
    const center = this.centerOfLots(lots);
    const midPoint = this.centerOfViewport();
    if (center && midPoint) {
      const max = this.maxTranslate();
      const min = this.minTranslate();
      const translate = [
        -(Number(center.x) - midPoint.x / this.zoom) * this.zoom,
        -(Number(center.y) - midPoint.y / this.zoom) * this.zoom
      ];
      this.view.translate([
        Math.max(max[0], Math.min(min[0], translate[0])),
        Math.max(max[1], Math.min(min[1], translate[1]))
      ]);
      // TODO: get ready for a pan-initiated translate
      setTimeout(() => (this.xlate = this.view.view.translate), 100);
    } else console.error(`Can't select lots ${JSON.stringify(lots)}`);
  }

  private setProperties(): void {
    const style = document.body.style;
    const view = this.view.view;
    style.setProperty('--app-scale', `${view.scale}`);
    style.setProperty('--app-translate-x', `${view.translate[0]}`);
    style.setProperty('--app-translate-y', `${view.translate[1]}`);
  }
}
