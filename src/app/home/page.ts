import { DestroyService } from '../services/destroy';
import { DetailsComponent } from './details';
import { GeolocationService } from '../services/geolocation';
import { GeometryService } from '../services/geometry';
import { GoogleService } from '../services/google';
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
import { SingletonAlertService } from '../services/alert';
import { SingletonModalService } from '../services/modal';
import { SingletonToastService } from '../services/toast';
import { VersionService } from '../services/version';
import { ViewState } from '../state/view';

import { Actions } from '@ngxs/store';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { Components } from '@ionic/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { SwUpdate } from '@angular/service-worker';
import { ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { filter } from 'rxjs/operators';
import { retryBackoff } from 'backoff-rxjs';
import { take } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

@Component({
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService],
  selector: 'app-home',
  styleUrls: ['./page.scss'],
  templateUrl: './page.html'
})
export class HomePage implements AfterViewInit, OnInit {
  #highlightStylesheet: CSSStyleSheet | null = null;
  #overlayStylesheet: CSSStyleSheet | null = null;
  #xlate: [number, number] = [0, 0];

  animating = true;

  // 👇 constructing the polygons for the lots takes a long time
  //    and we don't need them right away
  lotsReady = false;
  lotsShowing = false;

  maps: Maps = MAPS;

  @ViewChild('menu') menu: Components.IonMenu | null = null;

  trackable = 'geolocation' in navigator;
  translating = false;

  constructor(
    private actions$: Actions,
    private destroy$: DestroyService,
    private geolocation$: GeolocationService,
    public geometry: GeometryService,
    private api: GoogleService,
    private http: HttpClient,
    public model: ModelState,
    public overlay: OverlayState,
    public params: Params,
    public selection: SelectionState,
    private sac: SingletonAlertService,
    private smc: SingletonModalService,
    private stc: SingletonToastService,
    private swUpdate: SwUpdate,
    private version: VersionService,
    public view: ViewState
  ) {
    // 👇 let's start loading the Google Maps API
    this.api.ready$.subscribe();
  }

  #createHighlightStylesheet(): void {
    const style = document.createElement('style');
    document.head.appendChild(style);
    this.#highlightStylesheet = style.sheet;
  }

  #createOverlayStylesheet(): void {
    const style = document.createElement('style');
    document.head.appendChild(style);
    this.#overlayStylesheet = style.sheet;
    this.#overlayLots();
  }

  #currentPositionNotAvailable(error: GeolocationPositionError): void {
    this.stc.createAndPresent({
      message: `GPS signal ${error.message}`,
      duration: this.params.common.toastDuration,
      color: 'light'
    });
  }

  #currentPositionOffMap(): void {
    this.stc.createAndPresent({
      message: 'Currently outside map limits',
      duration: this.params.common.toastDuration,
      color: 'light'
    });
  }

  #currentPositionOnMap(mapID: string): void {
    const map = MAPS[mapID];
    this.stc.createAndPresent({
      header: `Currently on the ${map.title} map`,
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

  #handleActions$(): void {
    this.actions$
      .pipe(
        takeUntil(this.destroy$),
        filter(({ status }) => status === 'SUCCESSFUL')
      )
      .subscribe(({ action }) => {
        this.#handleOverlayUpdate(action);
        this.#handleModelSwitchTo(action);
        this.#handleViewInitialize(action);
        this.#handleSelectionSearchFor(action);
        this.#handleSelectionSelectLots(action);
        this.#handleViewScale(action);
        this.#handleViewTranslate(action);
      });
  }

  #handleModelSwitchTo(action: any): void {
    if (action['ModelState.switchTo'] != null) {
      setTimeout(
        () => (this.lotsShowing = true),
        this.params.home.page.showLotsDelay
      );
      this.#initializeView();
      this.#setProperties();
    }
  }

  #handleOverlayUpdate(action: any): void {
    if (action['OverlayState.update'] != null) {
      this.#overlayLots();
    }
  }

  #handleSelectionSearchFor(action: any): void {
    if (action['SelectionState.searchFor'] != null) {
      const lots = this.selection.lots;
      const text = this.selection.text;
      if (!text) {
        // 👇 empty text says we remove highlight
        this.#unhighlightLots();
      } else if (lots?.length > 0) {
        // 👇 find all the mapIDs for all the lots
        const mapIDs = lots.reduce((set, lot) => {
          const id = this.geometry.whichMapID(lot.boundaries[0][0]);
          set.add(id);
          return set;
        }, new Set());
        // 👇 if the lots span multiple maps, we have to use washington
        if (mapIDs.size > 1) {
          mapIDs.clear();
          mapIDs.add('washington');
        }
        // 👇 if we're not on the map that shows the lots, load it
        if (!mapIDs.has(this.model.mapID))
          this.#lotsFoundOnMap(lots, Array.from(mapIDs)[0] as string);
        else {
          this.#highlightLots(lots);
          this.geometry.centerLotsInViewport(lots);
        }
      }
    }
  }

  #handleSelectionSelectLots(action: any): void {
    if (action['SelectionState.selectLots'] != null) {
      const lots = this.selection.lots;
      this.#highlightLots(lots);
      this.smc.createAndPresent({
        component: DetailsComponent,
        componentProps: { lot: lots[0] },
        cssClass: ['big-and-tall-modal'],
        swipeToClose: false
      });
    }
  }

  #handleViewInitialize(action: any): void {
    if (action['ViewState.initialize'] != null) {
      this.#setProperties();
      if (!this.translating) this.#xlate = this.view.view.translate;
    }
  }

  #handleViewScale(action: any): void {
    if (action['ViewState.scale'] != null) {
      this.#setProperties();
      // 👇 do this because the width of the highlight depends on the scale
      const lots = this.selection.lots;
      if (lots.length > 0) this.#highlightLots(lots);
      if (this.overlay.isSet) this.#overlayLots();
    }
  }

  #handleViewTranslate(action: any): void {
    if (action['ViewState.translate'] != null) {
      this.#setProperties();
      if (!this.translating) this.#xlate = this.view.view.translate;
    }
  }

  #highlightLots(lots: Lot[]): void {
    this.#unhighlightLots();
    // 👇 pay attention to globals.scss
    const params = this.params.common;
    lots.forEach((lot) => {
      const rule = `app-lots svg g polygon[id='${lot.id}'] {
        stroke: ${params.lotOutlineColor};
        stroke-width: ${params.lotOutlineWidth / this.view.view.scale}
      }`;
      this.#highlightStylesheet?.insertRule(rule);
    });
  }

  #initializeGeolocation$(): void {
    const params = this.params.common.backoff;
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
        error: this.#initializeGeolocationError.bind(this),
        next: this.#initializeGeolocationPosition.bind(this)
      });
  }

  #initializeGeolocationError(error: GeolocationPositionError): void {
    // 👇 we should only get here on PERMISSION_DENIED or after all
    //    maxRetries have been attempted
    console.error('🔥 Geolocation showTrackerError', error);
    this.#currentPositionNotAvailable(error);
    this.model.track(false);
  }

  #initializeGeolocationPosition(position: GeolocationPosition): void {
    const mapIDs = this.geometry.whichMapIDs({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
    if (mapIDs.length === 0) this.#currentPositionOffMap();
    else if (!mapIDs.includes(this.model.mapID))
      this.#currentPositionOnMap(mapIDs[0]);
    this.model.track(true);
  }

  #initializeView(): void {
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

  #lotsFoundOnMap(lots: Lot[], mapID: string): void {
    const map = MAPS[mapID];
    this.stc.createAndPresent({
      header:
        lots.length === 1
          ? `Lot ${lots[0].id} is on the ${map.title} map`
          : `Lots requested are on the ${map.title} map`,
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

  #overlayLots(): void {
    // first, remove any prior overlay
    while (this.#overlayStylesheet?.cssRules.length)
      this.#overlayStylesheet?.deleteRule(0);
    // 👇 pay attention to globals.scss
    const params = this.params.common;
    this.overlay.properties
      .filter((property) => property.enabled)
      .forEach((property) => {
        const fill = property.fill ? `fill: ${property.fill};` : '';
        const stroke = property.stroke ? `stroke: ${property.stroke};` : '';
        const rule = `app-lots svg g polygon[data-${property.attribute}='${
          property.value
        }'] { ${fill} ${stroke}
          stroke-width: ${params.lotOutlineWidth / this.view.view.scale}
        }`;
        this.#overlayStylesheet?.insertRule(rule);
      });
  }

  #setProperties(): void {
    const style = document.body.style;
    const view = this.view.view;
    style.setProperty('--app-scale', `${view.scale}`);
    style.setProperty('--app-translate-x', `${view.translate[0]}`);
    style.setProperty('--app-translate-y', `${view.translate[1]}`);
    const params = this.params.common;
    style.setProperty('--lot-marker-color', `${params.lotMarkerColor}`);
    style.setProperty('--lot-marker-width', `${params.lotMarkerWidth}`);
    style.setProperty('--lot-outline-color', `${params.lotOutlineColor}`);
    style.setProperty('--lot-outline-width', `${params.lotOutlineWidth}`);
  }

  #unhighlightLots(): void {
    while (this.#highlightStylesheet?.cssRules.length)
      this.#highlightStylesheet?.deleteRule(0);
  }

  followTracker(following: boolean): void {
    this.model.follow(following);
  }

  ftScale(): number {
    // 👇 display more feet if zoom less than 1
    // TODO: does not look good at 75% -- sclae shows 267 feet
    return Math.round(
      this.model.map.ftScale * (1 / Math.min(1, this.view.view.scale))
    );
  }

  lotsLoaded(): void {
    this.lotsReady = true;
    this.selection.searchFor(this.selection.text);
  }

  ngAfterViewInit(): void {
    this.model.switchTo(this.model.mapID);
  }

  ngOnInit(): void {
    this.#handleActions$();
    if (this.model.tracker) this.#initializeGeolocation$();
    // 👇 we want the highlights to take precedence
    this.#createOverlayStylesheet();
    this.#createHighlightStylesheet();
  }

  pxScale(): number {
    // 👇 display more feet if zoom less than 1
    return (
      this.model.map.cxScale *
      this.view.view.scale *
      (1 / Math.min(1, this.view.view.scale))
    );
  }

  reload(): void {
    this.version.hardReset();
  }

  resize(event: ResizedEvent): void {
    console.log(
      `%cViewport resized ${event.newWidth}x${event.newHeight}`,
      'color: gold'
    );
    // 👇 we leverage the side-effect of properly clamping the translate
    this.translate(-0, -0, true);
  }

  scaleByWheel(event: WheelEvent): void {
    if (event.deltaY > 0) this.scaleUp();
    if (event.deltaY < 0) this.scaleDown();
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
      if (lot) this.selection.selectLots([lot]);
    }
  }

  showInfo(): void {
    this.smc.createAndPresent({
      component: InfoComponent,
      swipeToClose: false
    });
    this.menu?.close(true);
  }

  showMenu(): void {
    this.menu?.open();
  }

  showOverlay(): void {
    this.smc.createAndPresent({
      component: OverlayComponent,
      swipeToClose: false
    });
  }

  showTracker(tracker: boolean): void {
    if (tracker) this.#initializeGeolocation$();
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
    if ((this.translating || force) && this.#xlate) {
      const max = this.geometry.maxTranslate();
      const min = this.geometry.minTranslate();
      const translate = [deltaX + this.#xlate[0], deltaY + this.#xlate[1]];
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
    this.#xlate = this.view.view.translate;
  }

  // 👇 this is designed to be called by the panend event
  translateEnd(): void {
    this.animating = true;
    this.translating = false;
    this.#xlate = this.view.view.translate;
  }
}
