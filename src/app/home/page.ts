import { Build } from '../state/build';
import { DestroyService } from '../services/destroy';
import { DetailsComponent } from './details';
import { GeolocationService } from '../services/geolocation';
import { GeometryService } from '../services/geometry';
import { InfoComponent } from './info';
import { Lot } from '../state/parcels';
import { LOT_BY_ID } from '../state/parcels';
import { Maps } from '../state/maps';
import { MAPS } from '../state/maps';
import { ModelState } from '../state/model';
import { OverlayComponent } from './overlay';
import { OverlayState } from '../state/overlay';
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
  animating = true;

  // 👇 constructing the polygons for the lots takes a long time
  // and we don't need them right away
  lotsReady = false;
  lotsShowing = false;

  maps: Maps = MAPS;

  @ViewChild('menu') menu: Components.IonMenu;

  trackable = 'geolocation' in navigator;
  translating = false;

  private checkVersion$ = new Subject<void>();
  private highlightStylesheet: CSSStyleSheet;
  private overlayStylesheet: CSSStyleSheet;
  private xlate: [number, number];

  constructor(
    private actions$: Actions,
    private destroy$: DestroyService,
    private geolocation$: GeolocationService,
    public geometry: GeometryService,
    private http: HttpClient,
    public model: ModelState,
    public overlay: OverlayState,
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

  lotsLoaded(): void {
    this.lotsReady = true;
    this.selection.searchFor(this.selection.text);
  }

  ngAfterViewInit(): void {
    this.model.switchTo(this.model.mapID);
  }

  ngOnInit(): void {
    this.handleActions$();
    if (this.model.tracker) this.initializeGeolocation$();
    this.checkVersion();
    // 👇 we want the highlights to take precedence
    this.createOverlayStylesheet();
    this.createHighlightStylesheet();
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
      const lot = LOT_BY_ID[lotID];
      if (lot) {
        this.highlightLots([lot]);
        this.smc.createAndPresent({
          component: DetailsComponent,
          componentProps: { lot },
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

  showOverlay(): void {
    this.smc.createAndPresent({
      component: OverlayComponent,
      swipeToClose: true
    });
  }

  showTracker(tracker: boolean): void {
    if (tracker) this.initializeGeolocation$();
    else this.model.track(false);
  }

  switchTo(mapID: string): void {
    if (mapID !== this.model.mapID) {
      // 👀 see handleModelSwitchTo for when we turn lots back on
      this.lotsReady = false;
      this.lotsShowing = false;
      this.model.switchTo(mapID);
    }
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

  private checkVersion(): void {
    if (this.swUpdate.isEnabled) this.checkVersionServiceWorker();
    // 👇 do this as backup anyway as we always enable the service
    // worker, but can't tell if it failed to load
    this.checkVersionLegacy();
  }

  private checkVersionLegacy(): void {
    // 👇 interval must be MUCH longer than duration of toaster
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

  private createHighlightStylesheet(): void {
    const style = document.createElement('style');
    document.head.appendChild(style);
    this.highlightStylesheet = style.sheet;
  }

  private createOverlayStylesheet(): void {
    const style = document.createElement('style');
    document.head.appendChild(style);
    this.overlayStylesheet = style.sheet;
    this.overlayLots();
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
      message: 'Currently outside map limits',
      duration: this.params.common.toastDuration,
      color: 'light'
    });
  }

  private currentPositionOnMap(mapID: string): void {
    const map = MAPS[mapID];
    this.stc.createAndPresent({
      header: `Currently on ${map.title} map`,
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
        this.handleOverlayUpdate(action);
        this.handleModelSwitchTo(action);
        this.handleViewInitialize(action);
        this.handleSelectionSearchFor(action);
        this.handleViewScale(action);
        this.handleViewTranslate(action);
      });
  }

  private handleModelSwitchTo(action: Object): void {
    if (action['ModelState.switchTo']) {
      setTimeout(
        () => (this.lotsShowing = true),
        this.params.home.page.showLotsDelay
      );
      this.initializeView();
      this.setProperties();
    }
  }

  private handleOverlayUpdate(action: Object): void {
    if (action['OverlayState.update']) {
      this.overlayLots();
    }
  }

  private handleSelectionSearchFor(action: Object): void {
    if (action['SelectionState.searchFor']) {
      const lots = this.selection.lots;
      if (lots?.length > 0) {
        const mapIDs = this.geometry.whichMapIDs(
          this.geometry.latlonCenterOfLots(lots)
        );
        if (!mapIDs.includes(this.model.mapID))
          // 👇 multiple lots may span multiple sub-maps
          // so load town map
          this.lotsFoundOnMap(
            lots,
            lots.length === 1 ? mapIDs[0] : 'washington'
          );
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
      // 👇 do this because the width of the highlight depends on the scale
      const lots = this.selection.lots;
      if (lots.length > 0) this.highlightLots(lots);
      if (this.overlay.isSet) this.overlayLots();
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
    // first, remove any prior highlight
    while (this.highlightStylesheet.cssRules.length > 0)
      this.highlightStylesheet.deleteRule(0);
    // 👇 pay attention to globals.scss
    lots.forEach((lot) => {
      const rule = `app-lots svg g polygon[id='${lot.id}'] {
        animation: HIGHLIGHT_LOTS 1s ease-in-out;
        fill: ${stroke};
        fill-opacity: 0;
        stroke: ${stroke};
        stroke-width: ${4 / this.view.view.scale}
      }`;
      this.highlightStylesheet.insertRule(rule);
    });
  }

  private initializeGeolocation$(): void {
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
        error: this.initializeGeolocationError.bind(this),
        next: this.initializeGeolocationPosition.bind(this)
      });
  }

  private initializeGeolocationError(error: GeolocationPositionError): void {
    // 👇 we should only get here on PERMISSION_DENIED or after all
    // maxRetries hsve been attempted
    console.error('🔥 Geolocation showTrackerError', error);
    this.currentPositionNotAvailable(error);
    this.model.track(false);
  }

  private initializeGeolocationPosition(position: GeolocationPosition): void {
    const mapIDs = this.geometry.whichMapIDs({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
    if (mapIDs.length === 0) this.currentPositionOffMap();
    else if (!mapIDs.includes(this.model.mapID))
      this.currentPositionOnMap(mapIDs[0]);
    this.model.track(true);
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

  private lotsFoundOnMap(lots: Lot[], mapID: string): void {
    const map = MAPS[mapID];
    this.stc.createAndPresent({
      header:
        lots.length === 1
          ? `Lot ${lots[0].id} is on ${map.title} map`
          : `Lots requested are on ${map.title} map`,
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

  private overlayLots(): void {
    // first, remove any prior overlay
    while (this.overlayStylesheet.cssRules.length > 0)
      this.overlayStylesheet.deleteRule(0);
    // 👇 pay attention to globals.scss
    this.overlay.properties
      .filter((property) => property.enabled)
      .forEach((property) => {
        const rule = `app-lots svg g polygon[data-${property.attribute}='${
          property.value
        }'] {
          fill: ${property.fill || 'none'};
          stroke: ${property.stroke || 'none'};
          stroke-width: ${4 / this.view.view.scale}
        }`;
        this.overlayStylesheet.insertRule(rule);
      });
  }

  private setProperties(): void {
    const style = document.body.style;
    const view = this.view.view;
    style.setProperty('--app-scale', `${view.scale}`);
    style.setProperty('--app-translate-x', `${view.translate[0]}`);
    style.setProperty('--app-translate-y', `${view.translate[1]}`);
  }
}
