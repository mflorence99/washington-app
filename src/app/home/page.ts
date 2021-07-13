import { Build } from '../state/build';
import { DESC_BY_USAGE } from '../state/lots';
import { DestroyService } from '../services/destroy';
import { DetailsComponent } from './details';
import { Lot } from '../state/parcels';
import { Map } from '../state/maps';
import { MAPS } from '../state/maps';
import { ModelState } from '../state/model';
import { PARCELS_BY_ID } from '../state/parcels';
import { Point } from '../state/maps';
import { SelectionState } from '../state/selection';
import { ViewState } from '../state/view';

import { environment } from '../../environments/environment';

import { Actions } from '@ngxs/store';
import { Component } from '@angular/core';
import { Components } from '@ionic/core';
import { ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { ToastController } from '@ionic/angular';
import { ViewChild } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs';

import centroid from 'polygon-centroid';
import classifyPoint from 'robust-point-in-polygon';

// NOTE: we tried to support pinch to zoom but it wasn't satisfactory

@Component({
  providers: [DestroyService],
  selector: 'app-home',
  templateUrl: './page.html'
})
export class HomePage implements OnInit {
  @ViewChild('map') map: ElementRef<HTMLImageElement>;
  @ViewChild('menu') menu: Components.IonMenu;
  @ViewChild('searchbar') searchbar: Components.IonSearchbar;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  animating = true;
  loading = true;
  maps: Map[] = MAPS;

  private scales = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3];
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
    if (element) {
      return [
        element.parentElement.offsetWidth - element.offsetWidth,
        element.parentElement.offsetHeight - element.offsetHeight
      ];
    } else return [0, 0];
  }

  minTranslate(): [number, number] {
    return [0, 0];
  }

  maxScale(): number {
    return this.scales[this.scales.length - 1];
  }

  minScale(): number {
    const element = this.map?.nativeElement;
    if (element) {
      const minX = element.parentElement.offsetWidth / element.offsetWidth;
      const minY = element.parentElement.offsetHeight / element.offsetHeight;
      // NOTE: make sure that scale is always represented in scales
      return Math.round(Math.max(minX, minY, this.scales[0]) * 10) / 10;
    } else return this.scales[0];
  }

  ngOnInit(): void {
    this.handleActions$();
    this.checkVersion();
    this.createStylesheet();
  }

  ready(): void {
    console.log(`%cReady for map ${this.model.map.title}`, 'color: gold');
    this.loading = false;
    setTimeout(() => {
      // make sure view is initialized
      this.initializeView();
      // re-search for any past search
      this.searchFor(this.selection.text);
    }, 0);
  }

  resize(_event: ResizedEvent): void {
    // NOTE: we leverage the side-effect of properly clamping the translate
    this.xlate = this.view.view.translate;
    this.translate(0, 0);
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
    if (!this.loading) {
      console.log(`%cSearching for ${text}`, 'color: skyblue');
      this.selection.searchFor(text);
    }
  }

  // NOTE: this works because we scale the "tap" surface on its center
  selectLot(point: Point): void {
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
      const polygon = this.whichPolygon(point);
      // find the lots selected
      if (polygon?.id) {
        const lots = PARCELS_BY_ID[polygon.id];
        if (lots) {
          this.unhighlightLots();
          this.highlightLots(lots, 'var(--ion-color-danger)');
          this.mc
            .create({
              component: DetailsComponent,
              componentProps: { lot: lots[0] },
              cssClass: 'lot-details'
            })
            .then((modal) => modal.present());
        }
      }
    }
  }

  switchTo(map: Map): void {
    if (map.id !== this.model.map.id) {
      this.loading = true;
      this.xlate = null;
      this.model.switchTo(map);
    }
    this.menu.close(true);
  }

  trackByMap(index: number, map: Map): string {
    return map.id;
  }

  trackByUsage(index: number, usage: [string, string]): string {
    return usage[0];
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
    this.xlate = this.view.view.translate;
  }

  // NOTE: this is designed to be called by the panend event
  translateEnd(): void {
    this.animating = true;
    this.xlate = this.view.view.translate;
  }

  usages(): [string, string][] {
    return Object.entries(DESC_BY_USAGE);
  }

  // private methods

  private centerLotsInViewport(lots: Lot[]): void {
    // put the center of the lots in the middle of the viewport
    const center = this.centerOfLots(lots);
    const midPoint = this.centerOfViewport();
    if (center && midPoint) {
      const max = this.maxTranslate();
      const min = this.minTranslate();
      const translate = [
        -(Number(center.x) - midPoint.x),
        -(Number(center.y) - midPoint.y)
      ];
      this.view.translate([
        Math.max(max[0], Math.min(min[0], translate[0])),
        Math.max(max[1], Math.min(min[1], translate[1]))
      ]);
      // TODO: get ready for a pan-initiated translate -- why so long?
      setTimeout(() => (this.xlate = this.view.view.translate), 100);
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
    if (element) {
      return {
        x: element.parentElement.offsetWidth / 2,
        y: element.parentElement.offsetHeight / 2
      };
    } else return null;
  }

  // NOTE: interval must be MUCH longer than duration of toaster
  private checkVersion(): void {
    timer(5000, 120000)
      .pipe(
        takeUntil(this.destroy$),
        mergeMap(() => this.http.get<Build>('../assets/build.json')),
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
      const rule = `.lots svg g polygon[id='${lot.id}'] {
        stroke: ${stroke};
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

  private originOfViewport(): Point {
    const element = this.map?.nativeElement;
    if (element) {
      return {
        x: element.parentElement.offsetLeft,
        y: element.parentElement.offsetTop
      };
    } else return null;
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
        message: 'New version detected. Reload?',
        duration: 5000,
        color: 'light',
        buttons: [
          {
            side: 'end',
            text: 'Reload Now',
            handler: (): void => {
              window.location.reload();
            }
          },
          {
            text: 'Maybe Later',
            role: 'cancel'
          }
        ]
      })
      .then((toast) => toast.present());
  }

  private whichPolygon(point: Point): SVGGeometryElement {
    const polygons = Array.from(
      document.querySelectorAll<SVGGeometryElement>('.lots svg g polygon')
    );
    const polygon = polygons.find((e) => {
      const raw = e.getAttribute('points');
      const points = raw.split(' ').map((p) => p.split(','));
      // NOTE: a polygon is supposed to close itself and doesn't need
      // a closing point which ours have -- nonetheless, it doesn't
      // seem to hurt to keep it in
      // points.length = points.length - 1;
      // NOTE: classifyPoint wants points as tuples
      return classifyPoint(points, [point.x, point.y]) <= 0;
    });
    return polygon;
  }
}
