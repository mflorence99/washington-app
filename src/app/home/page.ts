import { Build } from '../state/build';
import { DestroyService } from '../services/destroy';
import { DetailsComponent } from './details';
import { GeolocationService } from '../services/geolocation';
import { GeometryService } from '../services/geometry';
import { InfoComponent } from './info';
import { Lot } from '../state/parcels';
import { LOTS_BY_ID } from '../state/parcels';
import { Maps } from '../state/maps';
import { MAPS } from '../state/maps';
import { ModelState } from '../state/model';
import { SelectionState } from '../state/selection';
import { ViewState } from '../state/view';

import { environment } from '../../environments/environment';

import { Actions } from '@ngxs/store';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { Components } from '@ionic/core';
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
import { take } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  // NOTE: so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService],
  selector: 'app-home',
  styleUrls: ['./page.scss'],
  templateUrl: './page.html'
})
export class HomePage implements AfterViewInit, OnInit {
  @ViewChild('menu') menu: Components.IonMenu;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  animating = true;
  maps: Maps = MAPS;
  trackable = 'geolocation' in navigator;
  translating = false;

  private checkVersion$ = new Subject<void>();
  private stylesheet: CSSStyleSheet;
  private xlate: [number, number];

  constructor(
    private actions$: Actions,
    private destroy$: DestroyService,
    private geolocation$: GeolocationService,
    public geometry: GeometryService,
    private http: HttpClient,
    private mc: ModalController,
    public model: ModelState,
    public selection: SelectionState,
    private tc: ToastController,
    public view: ViewState
  ) {}

  followTracker(following: boolean): void {
    this.model.follow(following);
  }

  ngAfterViewInit(): void {
    console.log('%cUI loaded', 'color: gold');
    this.ready();
    // NOTE: analyze the initial position of the tracker if it's showing
    this.showTracker(this.model.tracker);
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
    this.translate(-0, -0);
  }

  searchFor(text: string): void {
    console.log(`%cSearching for ${text}`, 'color: skyblue');
    this.selection.searchFor(text);
  }

  // NOTE: this works because we scale the "tap" surface on its center
  selectLot(event: HammerInput): void {
    const point = this.geometry.event2point(event);
    const center = this.geometry.centerOfViewport();
    const origin = this.geometry.originOfViewport();
    const translate = this.view.view.translate;
    const scale = this.view.view.scale;
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
    const lotID = this.geometry.whichLotID(point);
    // find the lots selected
    if (lotID) {
      const lots = LOTS_BY_ID[lotID];
      if (lots) {
        this.unhighlightLots();
        this.highlightLots(lots);
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

  showMenu(): void {
    this.menu?.open();
  }

  showTracker(tracker: boolean): void {
    if (tracker) {
      this.geolocation$.pipe(take(1)).subscribe({
        complete: () => {
          console.error('Geolocation stream has completed');
        },

        error: (error) => {
          console.error(error);
          this.currentPositionNotAvailable();
          this.model.track(false);
        },

        next: (position) => {
          const mapIDs = this.geometry.whichMapIDs({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
          if (mapIDs.length === 0) this.currentPositionOffMap();
          else if (!mapIDs.includes(this.model.mapID))
            this.currentPositionOnMap(mapIDs[0]);
          this.model.track(true);
        }
      });
    } else this.model.track(false);
  }

  switchTo(mapID: string): void {
    if (mapID !== this.model.mapID) {
      // this.xlate = null;
      this.model.switchTo(mapID);
    }
    // NOTE: close the menu later so the transition can be seen
    setTimeout((): any => this.menu?.close(true), 0);
  }

  // NOTE: this is designed to be called by the pan event
  translate(deltaX: number, deltaY: number): void {
    if (this.translating && this.xlate) {
      const max = this.geometry.maxTranslate();
      const min = this.geometry.minTranslate();
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
        if (build.id !== environment.build.id) this.newVersionDetected();
      });
  }

  private createStylesheet(): void {
    const style = document.createElement('style');
    document.head.appendChild(style);
    this.stylesheet = style.sheet;
  }

  private currentPositionNotAvailable(): void {
    this.tc
      .create({
        message: 'GPS signal unavailable',
        duration: 2500,
        color: 'light'
      })
      .then((toast) => toast.present());
  }

  private currentPositionOffMap(): void {
    this.tc
      .create({
        message: 'You are currently outside Washington',
        duration: 2500,
        color: 'light'
      })
      .then((toast) => toast.present());
  }

  private currentPositionOnMap(mapID: string): void {
    const map = MAPS[mapID];
    this.tc
      .create({
        header: `You are currently in ${map.title}`,
        message: 'Load the map?',
        duration: 5000,
        color: 'light',
        buttons: [
          {
            side: 'end',
            text: 'Yes',
            handler: (): void => {
              this.switchTo(mapID);
            }
          },
          {
            text: 'No',
            role: 'cancel'
          }
        ]
      })
      .then((toast) => toast.present());
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
          action['ViewState.translated']
        ) {
          this.setProperties();
          if (!this.translating) this.xlate = this.view.view.translate;
        } else if (action['ViewState.scaled']) {
          this.setProperties();
          const lots = this.selection.lots;
          if (lots.length > 0) {
            this.unhighlightLots();
            this.highlightLots(lots);
          }
        } else if (action['SelectionState.found']) {
          const lots = this.selection.lots;
          this.unhighlightLots();
          if (lots.length > 0) {
            this.highlightLots(lots);
            this.geometry.centerLotsInViewport(lots);
          }
        }
      });
  }

  private highlightLots(lots: Lot[], stroke = 'var(--ion-color-danger)'): void {
    // NOTE: pay attention to globals.scss
    lots.forEach((lot) => {
      const rule = `app-home .lots svg g polygon[id='${lot.id}'] {
        animation: HIGHLIGHT_LOTS 1s ease-in-out;
        fill: ${stroke};
        fill-opacity: 0;
        stroke: ${stroke};
        stroke-width: ${4 / this.view.view.scale}
      }`;
      this.stylesheet.insertRule(rule);
    });
  }

  private initializeView(): void {
    const focus = this.geometry.latlon2xy(this.model.map.focus);
    const midPoint = this.geometry.centerOfViewport();
    const max = this.geometry.maxTranslate();
    const min = this.geometry.minTranslate();
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

  private newVersionDetected(): void {
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
}
