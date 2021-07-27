import { Build } from '../state/build';
import { DestroyService } from '../services/destroy';
import { DetailsComponent } from './details';
import { InfoComponent } from './info';
import { Lot } from '../state/parcels';
import { Map } from '../state/maps';
import { MAPS } from '../state/maps';
import { ModelState } from '../state/model';
import { PARCELS_BY_ID } from '../state/parcels';
import { Point } from '../state/maps';
import { SelectionState } from '../state/selection';
import { Tile } from '../state/tiles';
import { TILE_CONTAINERS } from '../state/tiles';
import { TileContainer } from '../state/tiles';
import { TILES } from '../state/tiles';
import { ViewState } from '../state/view';

import { environment } from '../../environments/environment';

import { Actions } from '@ngxs/store';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { Components } from '@ionic/core';
import { ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Subject } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { merge } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs';

import centroid from 'polygon-centroid';
import pointInPoly from 'point-in-polygon-extended';

// NOTE: we tried to support pinch to zoom but it wasn't satisfactory

@Component({
  // NOTE: so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService],
  selector: 'app-home',
  styleUrls: ['./page.scss'],
  templateUrl: './page.html'
})
export class HomePage implements AfterViewInit, OnInit {
  @ViewChild('map') map: ElementRef<HTMLImageElement>;
  @ViewChild('menu') menu: Components.IonMenu;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  animating = true;
  maps: Map[] = MAPS;
  translating = false;

  private checkVersion$ = new Subject<void>();
  private scales = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5];
  private stylesheet: CSSStyleSheet;
  private xlate: [number, number];

  constructor(
    private actions$: Actions,
    private destroy$: DestroyService,
    private http: HttpClient,
    private mc: ModalController,
    public model: ModelState,
    public selection: SelectionState,
    private tc: ToastController,
    public view: ViewState
  ) {}

  maxTranslate(): [number, number] {
    const element = this.map?.nativeElement;
    if (
      element &&
      element.parentElement.offsetWidth &&
      element.offsetWidth &&
      element.parentElement.offsetHeight &&
      element.offsetHeight
    ) {
      return [
        element.parentElement.offsetWidth - element.offsetWidth,
        element.parentElement.offsetHeight - element.offsetHeight
      ];
    } else return [-Number.MAX_VALUE, -Number.MAX_VALUE];
  }

  minTranslate(): [number, number] {
    return [0, 0];
  }

  maxScale(): number {
    return this.scales[this.scales.length - 1];
  }

  minScale(): number {
    const element = this.map?.nativeElement;
    if (
      element &&
      element.parentElement.offsetWidth &&
      element.offsetWidth &&
      element.parentElement.offsetHeight &&
      element.offsetHeight
    ) {
      const minX = element.parentElement.offsetWidth / element.offsetWidth;
      const minY = element.parentElement.offsetHeight / element.offsetHeight;
      // NOTE: make sure that scale is always represented in scales
      return Math.round(Math.max(minX, minY, this.scales[0]) * 10) / 10;
    } else return this.scales[0];
  }

  ngAfterViewInit(): void {
    console.log('%cUI loaded', 'color: gold');
    this.ready();
  }

  ngOnInit(): void {
    this.handleActions$();
    this.checkVersion();
    this.createStylesheet();
  }

  resize(event: ResizedEvent): void {
    console.log(
      `%cViewport resized ${event.newWidth}x${event.newHeight}`,
      'color: gold'
    );
    // NOTE: we leverage the side-effect of properly clamping the translate
    this.xlate = this.view.view.translate;
    this.translate(-0, -0);
  }

  scaleDown(): void {
    const ix = this.scales.findIndex((scale) => scale === this.view.view.scale);
    if (ix > 0) this.view.scale(this.scales[ix - 1]);
  }

  scaleUp(): void {
    const ix = this.scales.findIndex((scale) => scale === this.view.view.scale);
    if (ix < this.scales.length - 1 && ix !== -1)
      this.view.scale(this.scales[ix + 1]);
  }

  searchFor(text: string): void {
    console.log(`%cSearching for ${text}`, 'color: skyblue');
    this.selection.searchFor(text);
  }

  // NOTE: this works because we scale the "tap" surface on its center
  selectLot(event: HammerInput): void {
    const point = this.event2point(event);
    const center = this.centerOfViewport();
    const origin = this.originOfViewport();
    const translate = this.view.view.translate;
    const scale = this.view.view.scale;
    if (center && origin) {
      const xlate = {
        x: -translate[0],
        y: -translate[1]
      };
      // cx            the distance of a point from the center
      // cx/scale      the actual distance in unscaled units
      // cx - cx/scale the delta from scaling
      // so ...
      // x += cx - cx/scale
      // y += cy - cy/scale
      const cx = center.x - point.x;
      const dx = cx - cx / scale;
      const ox = origin.x / scale;
      point.x += dx - ox + xlate.x;
      const cy = center.y - point.y;
      const dy = cy - cy / scale;
      const oy = origin.y / scale;
      point.y += dy - oy + xlate.y;
      const lotID = this.whichLotID(point);
      // find the lots selected
      if (lotID) {
        const lots = PARCELS_BY_ID[lotID];
        if (lots) {
          this.unhighlightLots();
          this.highlightLots(lots, 'var(--ion-color-danger)');
          this.mc
            .create({
              component: DetailsComponent,
              componentProps: { lot: lots[0] },
              swipeToClose: true
            })
            .then((modal) => modal.present());
        }
      }
    }
  }

  showMenu(): void {
    this.menu?.open();
  }

  showInfo(): void {
    this.mc
      .create({
        component: InfoComponent,
        swipeToClose: true
      })
      .then((modal) => modal.present());
    // NOTE: close the menu later so the transition can be seen
    setTimeout((): any => this.menu?.close(true), 0);
  }

  switchTo(map: Map): void {
    if (map.id !== this.model.map.id) {
      this.xlate = null;
      this.model.switchTo(map);
    }
    // NOTE: close the menu later so the transition can be seen
    setTimeout((): any => this.menu?.close(true), 0);
  }

  tileContainer(): TileContainer {
    return TILE_CONTAINERS[this.model.map.id];
  }

  tiles(): Tile[] {
    return TILES[this.model.map.id];
  }

  trackByMap(index: number, map: Map): string {
    return map.id;
  }

  // NOTE: this is designed to be called by the pan event
  translate(deltaX: number, deltaY: number): void {
    if (this.xlate) {
      const max = this.maxTranslate();
      const min = this.minTranslate();
      const translate = [deltaX + this.xlate[0], deltaY + this.xlate[1]];
      this.view.translate([
        Math.max(max[0], Math.min(min[0], translate[0])),
        Math.max(max[1], Math.min(min[1], translate[1]))
      ]);
    }
  }

  // NOTE: this is designed to be called by the panstart event
  translateBegin(): void {
    this.animating = false;
    this.translating = true;
    this.xlate = this.view.view.translate;
  }

  // NOTE: this is designed to be called by the panend event
  translateEnd(): void {
    this.animating = true;
    this.translating = false;
    this.xlate = this.view.view.translate;
  }

  // private methods

  private centerLotsInViewport(lots: Lot[]): void {
    // put the center of the lots in the middle of the viewport
    const center = this.centerOfLots(lots);
    const midPoint = this.centerOfViewport();
    if (center && midPoint) {
      const max = this.maxTranslate();
      const min = this.minTranslate();
      const translate: [number, number] = [
        Math.max(max[0], Math.min(min[0], -(Number(center.x) - midPoint.x))),
        Math.max(max[1], Math.min(min[1], -(Number(center.y) - midPoint.y)))
      ];
      this.view.translate(translate);
      // setup for pan-initiated translate
      this.xlate = translate;
    } else console.log(`%cCan't select lots ${lots[0].id}`, 'color: indianred');
  }

  private centerOfLots(lots: Lot[]): Point {
    // find the center of each lot
    const centers = lots.reduce((acc, lot) => {
      const polygon = document.getElementById(lot.id);
      if (polygon) {
        const raw = polygon.getAttribute('points');
        const points = raw.split(' ').map((point) => {
          const [x, y] = point.split(',');
          // NOTE: centroid wants points in Point format
          return { x: Number(x), y: Number(y) };
        });
        acc.push(centroid(points));
      } else
        console.log(`%cCan't find polygon for ${lot.id}`, 'color: indianred');
      return acc;
    }, []);
    // return the center of the centers
    if (centers.length === 0) return null;
    else if (centers.length === 1) return centers[0];
    else return centroid(centers);
  }

  private centerOfViewport(): Point {
    const element = this.map?.nativeElement;
    if (
      element &&
      element.parentElement.offsetWidth &&
      element.parentElement.offsetHeight
    ) {
      return {
        x: element.parentElement.offsetWidth / 2,
        y: element.parentElement.offsetHeight / 2
      };
    } else return { x: 0, y: 0 };
  }

  // NOTE: interval must be MUCH longer than duration of toaster
  private checkVersion(): void {
    timer(5000, 120000)
      .pipe(
        takeUntil(merge(this.checkVersion$, this.destroy$)),
        mergeMap(() =>
          this.http.get<Build>('../assets/build.json', {
            params: {
              x: Math.random()
            }
          })
        ),
        catchError(() => of(environment.build))
      )
      .subscribe((build: Build) => {
        if (build.id !== environment.build.id) this.wereToast();
      });
  }

  private createStylesheet(): void {
    const style = document.createElement('style');
    document.head.appendChild(style);
    this.stylesheet = style.sheet;
  }

  private event2point(event: HammerInput): Point {
    const point = event.center;
    const container = this.map.nativeElement.parentElement;
    if (container.style.position === 'relative') {
      point.x -= container.offsetLeft;
      point.y -= container.offsetTop;
    }
    return point;
  }

  private handleActions$(): void {
    this.actions$
      .pipe(
        takeUntil(this.destroy$),
        filter(({ status }) => status === 'SUCCESSFUL')
      )
      .subscribe(({ action }) => {
        if (action['ModelState.switchedTo']) {
          this.setProperties();
          this.ready();
        } else if (
          action['ViewState.initialized'] ||
          action['ViewState.scaled'] ||
          action['ViewState.translated']
        ) {
          this.setProperties();
        } else if (action['SelectionState.found']) {
          const lots = action['SelectionState.found'];
          this.unhighlightLots();
          if (lots.length > 0) {
            this.highlightLots(lots, 'var(--ion-color-danger)');
            this.centerLotsInViewport(lots);
          }
        }
      });
  }

  private highlightLots(lots: Lot[], stroke: string): void {
    // NOTE: pay attention to globals.scss
    lots.forEach((lot) => {
      const rule = `app-home .lots svg g polygon[id='${lot.id}'] {
        animation: FILL 1s ease-in-out;
        fill: ${stroke};
        fill-opacity: 0;
        stroke: ${stroke};
        stroke-width: ${Math.max(3, 3 / this.view.view.scale)}
      }`;
      this.stylesheet.insertRule(rule);
    });
  }

  private initializeView(): void {
    const focus = this.model.map.focus;
    const midPoint = this.centerOfViewport();
    const max = this.maxTranslate();
    const min = this.minTranslate();
    const view = ViewState.defaultView();
    const translate = [-(focus.x - midPoint.x), -(focus.y - midPoint.y)];
    this.view.initialize({
      scale: view.scale,
      translate: [
        Math.max(max[0], Math.min(min[0], translate[0])),
        Math.max(max[1], Math.min(min[1], translate[1]))
      ]
    });
  }

  private nearestLotID(point: Point, lotIDs: string[]): string {
    let lastDistance = Number.MAX_VALUE;
    let nearestLotID = null;
    const lots = lotIDs.flatMap((lotID) => PARCELS_BY_ID[lotID]);
    lots.forEach((lot) => {
      const center = this.centerOfLots([lot]);
      const distance = Math.abs(
        Math.hypot(point.x - center.x, point.y - center.y)
      );
      console.log(`Distance to ${lot.id} is ${distance}`);
      if (distance < lastDistance) {
        lastDistance = distance;
        nearestLotID = lot.id;
      }
    });
    return nearestLotID;
  }

  private originOfViewport(): Point {
    const element = this.map?.nativeElement;
    if (element) {
      return {
        x: element.parentElement.offsetLeft,
        y: element.parentElement.offsetTop
      };
    } else return { x: 0, y: 0 };
  }

  private ready(): void {
    console.log(`%cReady for map ${this.model.map.title}`, 'color: gold');
    setTimeout(() => {
      // make sure view is initialized
      this.initializeView();
      // re-search for any past search
      this.searchFor(this.selection.text);
    }, 0);
  }

  private setProperties(): void {
    const style = document.body.style;
    const view = this.view.view;
    style.setProperty('--app-scale', `${view.scale}`);
    style.setProperty('--app-translate-x', `${view.translate[0]}`);
    style.setProperty('--app-translate-y', `${view.translate[1]}`);
  }

  private unhighlightLots(): void {
    while (this.stylesheet.cssRules.length > 0) this.stylesheet.deleteRule(0);
  }

  private wereToast(): void {
    this.tc
      .create({
        header: 'New version detected',
        message: 'Reload?',
        duration: 5000,
        color: 'light',
        buttons: [
          {
            side: 'end',
            text: 'Now',
            handler: (): void => {
              window.location.reload();
            }
          },
          {
            text: 'Later',
            role: 'cancel',
            handler: (): void => {
              this.checkVersion$.next();
              this.checkVersion$.complete();
            }
          }
        ]
      })
      .then((toast) => toast.present());
  }

  private whichLotID(point: Point): string {
    const polygons = Array.from(
      document.querySelectorAll<SVGGeometryElement>(
        'app-home .lots svg g polygon'
      )
    );
    // @see robust-point-in-polygon, point-in-polygon and point-in-polygon-extended on GitHub
    // we tried them all and pointInPoly.pointInPolyWindingNumber
    // was the most reliable -- looks like the ray cast algorithm
    // gets confused
    // TODO: we should do "find" but keep "filter" for now
    const lots = polygons.filter((polygon) => {
      const raw = polygon.getAttribute('points');
      const points = raw.split(' ').map((p) => p.split(','));
      return pointInPoly.pointInPolyWindingNumber([point.x, point.y], points);
    });
    // TODO: resolve ambiguous matches by finding the nearest
    const lotIDs = lots.map((p) => p.id);
    console.log(
      `%cFound lots: ${lotIDs.join(', ')}`,
      lots.length > 1 ? 'color: indianred' : 'color: gold'
    );
    return lots.length > 1 ? this.nearestLotID(point, lotIDs) : lots[0]?.id;
  }
}
