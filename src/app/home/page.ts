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
import { Params } from '../services/params';
import { SelectionState } from '../state/selection';
import { SingletonModalService } from '../services/modal';
import { SingletonToastService } from '../services/toast';
import { ViewState } from '../state/view';

import { environment } from '../../environments/environment';

import { Actions } from '@ngxs/store';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { Components } from '@ionic/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Subject } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';
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
    public model: ModelState,
    private params: Params,
    public selection: SelectionState,
    private smc: SingletonModalService,
    private stc: SingletonToastService,
    private swUpdate: SwUpdate,
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
    this.translate(-0, -0, true);
  }

  scaleDown(): void {
    const ix = this.params.geometry.scales.findIndex(
      (scale) => scale === this.view.view.scale
    );
    if (ix > 0) this.view.scale(this.params.geometry.scales[ix - 1]);
    // NOTE: we leverage the side-effect of properly clamping the translate
    this.translate(-0, -0, true);
  }

  scaleUp(): void {
    const ix = this.params.geometry.scales.findIndex(
      (scale) => scale === this.view.view.scale
    );
    if (ix < this.params.geometry.scales.length - 1 && ix !== -1)
      this.view.scale(this.params.geometry.scales[ix + 1]);
    // NOTE: we leverage the side-effect of properly clamping the translate
    this.translate(-0, -0, true);
  }

  searchCancel(): void {
    console.log('%cCancelling search', 'color: darkorange');
    this.selection.searchCancel();
  }

  searchFor(text: string): void {
    if (!text) this.searchCancel();
    else {
      console.log(`%cSearching for ${text}`, 'color: skyblue');
      this.selection.searchFor(text);
    }
  }

  // NOTE: this works because we scale the "tap" surface on its center
  selectLot(event: HammerInput): void {
    const point = this.geometry.event2xy(event);
    const lotID = this.geometry.whichLotID(point);
    if (lotID) {
      const lots = LOTS_BY_ID[lotID];
      if (lots) {
        this.unhighlightLots();
        this.highlightLots(lots);
        this.smc.createAndPresent({
          component: DetailsComponent,
          componentProps: { lot: lots[0] },
          swipeToClose: true
        });
      }
    }
  }

  showInfo(): void {
    this.smc.createAndPresent({
      component: InfoComponent,
      swipeToClose: true
    });
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
  translate(deltaX: number, deltaY: number, force = false): void {
    if ((this.translating || force) && this.xlate) {
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
    if (this.swUpdate.isEnabled) this.checkVersionServiceWorker();
    // NOTE: do this as backup anyway as we always enable the service
    // worker, but can't tell if it failed to load
    this.checkVersionLegacy();
  }

  private checkVersionLegacy(): void {
    timer(
      this.params.home.page.checkVersionAfter,
      this.params.home.page.checkVersionInterval
    )
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

  private checkVersionServiceWorker(): void {
    merge(this.swUpdate.available, this.swUpdate.unrecoverable)
      .pipe(
        takeUntil(merge(this.checkVersion$, this.destroy$)),
        catchError(() => of(null)),
        filter((event) => !!event)
      )
      .subscribe(() => this.newVersionDetected());
  }

  private createStylesheet(): void {
    const style = document.createElement('style');
    document.head.appendChild(style);
    this.stylesheet = style.sheet;
  }

  private currentPositionNotAvailable(): void {
    this.stc.createAndPresent({
      message: 'GPS signal unavailable',
      duration: this.params.common.toastDuration,
      color: 'light'
    });
  }

  private currentPositionOffMap(): void {
    this.stc.createAndPresent({
      message: 'You are currently outside Washington',
      duration: this.params.common.toastDuration,
      color: 'light'
    });
  }

  private currentPositionOnMap(mapID: string): void {
    const map = MAPS[mapID];
    this.stc.createAndPresent({
      header: `You are currently in ${map.title}`,
      message: 'Load the map?',
      duration: this.params.common.toastDuration,
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
    });
  }

  private handleActions$(): void {
    this.actions$
      .pipe(
        takeUntil(this.destroy$),
        filter(({ status }) => status === 'SUCCESSFUL')
      )
      .subscribe(({ action }) => {
        this.handleModelSwitchedTo(action);
        this.handleViewInitialized(action);
        this.handleSelectionFound(action);
        this.handleViewScaled(action);
        this.handleViewTranslated(action);
      });
  }

  private handleModelSwitchedTo(action: Object): void {
    if (action['ModelState.switchedTo']) {
      this.setProperties();
      this.ready();
    }
  }

  private handleSelectionFound(action: Object): void {
    if (action['SelectionState.found']) {
      this.unhighlightLots();
      const lots = this.selection.lots;
      if (lots.length > 0) {
        const mapIDs = this.geometry.whichMapIDs(
          this.geometry.latlonCenterOfLots(lots)
        );
        if (!mapIDs.includes(this.model.mapID))
          this.lotFoundOnMap(lots[0], mapIDs[0]);
        else {
          this.highlightLots(lots);
          this.geometry.centerLotsInViewport(lots);
        }
      }
    }
  }

  private handleViewInitialized(action: Object): void {
    if (action['ViewState.initialized']) {
      this.setProperties();
      if (!this.translating) this.xlate = this.view.view.translate;
    }
  }

  private handleViewScaled(action: Object): void {
    if (action['ViewState.scaled']) {
      this.setProperties();
      const lots = this.selection.lots;
      if (lots.length > 0) {
        this.unhighlightLots();
        this.highlightLots(lots);
      }
    }
  }

  private handleViewTranslated(action: Object): void {
    if (action['ViewState.translated']) {
      this.setProperties();
      if (!this.translating) this.xlate = this.view.view.translate;
    }
  }

  private highlightLots(
    lots: Lot[],
    stroke = this.params.home.page.highlightedLotOutline
  ): void {
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
    const midPoint = this.geometry.xyCenterOfViewport();
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

  private lotFoundOnMap(lot: Lot, mapID: string): void {
    const map = MAPS[mapID];
    this.stc.createAndPresent({
      header: `Lot ${lot.id} is in ${map.title}`,
      message: 'Load the map?',
      duration: this.params.common.toastDuration,
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
          role: 'cancel',
          handler: (): void => {
            this.searchCancel();
          }
        }
      ]
    });
  }

  private newVersionDetected(): void {
    this.stc.createAndPresent({
      header: 'New version detected',
      message: 'Reload?',
      duration: this.params.common.toastDuration,
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
    });
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
