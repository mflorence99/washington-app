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
import { retryBackoff } from 'backoff-rxjs';
import { take } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  // 👇 so that we can manipulate the actual stylesheet in code
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
    // 👇 analyze the initial position of the tracker if it's showing
    this.showTracker(this.model.tracker);
    this.initializeView();
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
    // 👇 we leverage the side-effect of properly clamping the translate
    this.translate(-0, -0, true);
  }

  scaleDown(): void {
    const ix = this.params.geometry.scales.findIndex(
      (scale) => scale === this.view.view.scale
    );
    if (ix > 0) this.view.scale(this.params.geometry.scales[ix - 1]);
    // 👇 we leverage the side-effect of properly clamping the translate
    this.translate(-0, -0, true);
  }

  scaleUp(): void {
    const ix = this.params.geometry.scales.findIndex(
      (scale) => scale === this.view.view.scale
    );
    if (ix < this.params.geometry.scales.length - 1 && ix !== -1)
      this.view.scale(this.params.geometry.scales[ix + 1]);
    // 👇 we leverage the side-effect of properly clamping the translate
    this.translate(-0, -0, true);
  }

  searchFor(text: string): void {
    console.log(`%cSearching for ${text}`, 'color: skyblue');
    this.selection.searchFor(text);
  }

  selectLot(event: HammerInput): void {
    const xy = this.geometry.event2xy(event);
    const lotID = this.geometry.whichLotID(xy);
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
    this.menu?.close(true);
  }

  showMenu(): void {
    this.menu?.open();
  }

  showTracker(tracker: boolean): void {
    if (tracker) {
      const params = this.params.home.page.backoff;
      this.geolocation$
        .pipe(
          take(1),
          // 👀 https://indepth.dev/posts/1260/power-of-rxjs-when-using-exponential-backoff
          retryBackoff({
            initialInterval: params.initialInterval,
            maxInterval: params.maxInterval,
            maxRetries: params.maxRetries,
            resetOnSuccess: true,
            // 👇 GeolocationPositionError.PERMISSION_DENIED throws error on iOS
            shouldRetry: (error: GeolocationPositionError) => error.code !== 1
          })
        )
        .subscribe({
          error: this.showTrackerError.bind(this),
          next: this.showTrackerPosition.bind(this)
        });
    } else this.model.track(false);
  }

  switchTo(mapID: string): void {
    if (mapID !== this.model.mapID) this.model.switchTo(mapID);
    this.menu?.close(true);
  }

  // 👇 this is designed to be called by the pan event
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

  // 👇 this is designed to be called by the panstart event
  translateBegin(): void {
    this.animating = false;
    this.translating = true;
    this.xlate = this.view.view.translate;
  }

  // 👇 this is designed to be called by the panend event
  translateEnd(): void {
    this.animating = true;
    this.translating = false;
    this.xlate = this.view.view.translate;
  }

  // private methods

  // 👇 interval must be MUCH longer than duration of toaster
  private checkVersion(): void {
    if (this.swUpdate.isEnabled) this.checkVersionServiceWorker();
    // 👇 do this as backup anyway as we always enable the service
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

  private currentPositionNotAvailable(error: GeolocationPositionError): void {
    this.stc.createAndPresent({
      message: `GPS signal ${error.message}`,
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
          handler: (): void => this.switchTo(mapID)
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
        this.handleModelSwitchTo(action);
        this.handleViewInitialize(action);
        this.handleSelectionSearchFor(action);
        this.handleViewScale(action);
        this.handleViewTranslate(action);
      });
  }

  private handleModelSwitchTo(action: Object): void {
    if (action['ModelState.switchTo']) {
      this.initializeView();
      this.setProperties();
    }
  }

  private handleSelectionSearchFor(action: Object): void {
    if (action['SelectionState.searchFor']) {
      this.unhighlightLots();
      const lots = this.selection.lots;
      if (lots?.length > 0) {
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

  private handleViewInitialize(action: Object): void {
    if (action['ViewState.initialize']) {
      this.setProperties();
      if (!this.translating) this.xlate = this.view.view.translate;
    }
  }

  private handleViewScale(action: Object): void {
    if (action['ViewState.scale']) {
      this.setProperties();
      const lots = this.selection.lots;
      if (lots.length > 0) {
        this.unhighlightLots();
        this.highlightLots(lots);
      }
    }
  }

  private handleViewTranslate(action: Object): void {
    if (action['ViewState.translate']) {
      this.setProperties();
      if (!this.translating) this.xlate = this.view.view.translate;
    }
  }

  private highlightLots(
    lots: Lot[],
    stroke = this.params.home.page.highlightedLotOutline
  ): void {
    // 👇 pay attention to globals.scss
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
    // 👇 only effective if view is empty
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
          handler: (): void => this.switchTo(mapID)
        },
        {
          text: 'No',
          role: 'cancel',
          handler: (): void => this.searchFor('')
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
          handler: (): void => window.location.reload()
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

  private setProperties(): void {
    const style = document.body.style;
    const view = this.view.view;
    style.setProperty('--app-scale', `${view.scale}`);
    style.setProperty('--app-translate-x', `${view.translate[0]}`);
    style.setProperty('--app-translate-y', `${view.translate[1]}`);
  }

  private showTrackerError(error: GeolocationPositionError): void {
    // 👇 we should only get here on PERMISSION_DENIED or after all
    // maxRetries hsve been attempted
    console.error('🔥 Geolocation showTrackerError', error);
    this.currentPositionNotAvailable(error);
    this.model.track(false);
  }

  private showTrackerPosition(position: GeolocationPosition): void {
    const mapIDs = this.geometry.whichMapIDs({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
    if (mapIDs.length === 0) this.currentPositionOffMap();
    else if (!mapIDs.includes(this.model.mapID))
      this.currentPositionOnMap(mapIDs[0]);
    this.model.follow(true);
    this.model.track(true);
  }

  private unhighlightLots(): void {
    while (this.stylesheet.cssRules.length > 0) this.stylesheet.deleteRule(0);
  }
}
