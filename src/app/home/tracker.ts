import { DestroyService } from '../services/destroy';
import { GeolocationService } from '../services/geolocation';
import { GeometryService } from '../services/geometry';
import { ModelState } from '../state/model';
import { Params } from '../services/params';
import { SingletonToastService } from '../services/toast';
import { ViewState } from '../state/view';
import { XY } from '../services/geometry';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { retryBackoff } from 'backoff-rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService],
  selector: 'app-tracker',
  styleUrls: ['./tracker.scss'],
  templateUrl: './tracker.svg'
})
export class TrackerComponent {
  private lastTimestamp = 0;

  constructor(
    private destroy$: DestroyService,
    private geolocation$: GeolocationService,
    private geometry: GeometryService,
    public model: ModelState,
    private params: Params,
    private stc: SingletonToastService,
    public view: ViewState
  ) {
    this.handleGeoLocation$();
  }

  private currentPositionLost(error: GeolocationPositionError): void {
    this.stc.createAndPresent({
      message: `GPS tracking ${error.message}`,
      duration: this.params.common.toastDuration,
      color: 'light'
    });
  }

  // 👇 the margin makes sure the tracker doesn't get too close to the edge
  private followTracker(location: XY): void {
    if (
      !this.geometry.isXYInViewport(location, this.params.home.tracker.margin)
    )
      this.geometry.centerXYInViewport(location);
  }

  private handleGeoLocation$(): void {
    const params = this.params.home.tracker.backoff;
    this.geolocation$
      .pipe(
        takeUntil(this.destroy$),
        // 👀 https://indepth.dev/posts/1260/power-of-rxjs-when-using-exponential-backoff
        retryBackoff({
          backoffDelay: (iteration, initialInterval) =>
            Math.pow(1.1, iteration) * initialInterval,
          initialInterval: params.initialInterval,
          maxInterval: params.maxInterval,
          resetOnSuccess: true,
          shouldRetry: (error: GeolocationPositionError) => {
            const style = document.body.style;
            style.setProperty('--ball-accuracy', `0`);
            style.setProperty('--ball-color', 'var(--ion-color-medium');
            style.setProperty('--ball-heading-visibility', 'hidden');
            // 👇 GeolocationPositionError.PERMISSION_DENIED throws error on iOS
            return error.code !== 1;
          }
        })
      )
      .subscribe({
        error: this.handleGeolocationError.bind(this),
        next: this.handleGeolocationPosition.bind(this)
      });
  }

  private handleGeolocationError(error: GeolocationPositionError): void {
    // 👇 because shouldRetry has no maxRetries, we should only get here
    // on a PERMISSION_DENIED error
    console.error('🔥 Geolocation handleGeolocationError', error);
    this.currentPositionLost(error);
    this.model.track(false);
  }

  private handleGeolocationPosition(position: GeolocationPosition): void {
    // convert location to position over map
    const latlon = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    const mapIDs = this.geometry.whichMapIDs(latlon);
    const xy = this.geometry.latlon2xy(latlon);
    if (this.model.follower && mapIDs.includes(this.model.mapID))
      this.followTracker(xy);
    // convert accuracy from meters to feet to pixels
    const accuracy =
      (this.geometry.meters2feet(position.coords.accuracy) *
        this.model.map.cxScale) /
      this.model.map.ftScale;
    // what is interval between last reading?
    const interval = this.lastTimestamp
      ? position.timestamp - this.lastTimestamp
      : 0;
    this.lastTimestamp = position.timestamp;
    // TODO: ⚠️ how to control direction of rotation animation?
    const heading = position.coords.heading;
    const headingVisibility = heading != null && !isNaN(heading);
    // set properties and repaint
    const style = document.body.style;
    style.setProperty('--ball-accuracy', `${accuracy}`);
    style.setProperty('--ball-color', 'var(--ion-color-primary');
    style.setProperty('--ball-heading', `${heading}`);
    style.setProperty(
      '--ball-heading-visibility',
      `${headingVisibility ? 'visible' : 'hidden'}`
    );
    style.setProperty('--ball-interval', `${interval}`);
    style.setProperty('--ball-translate-x', `${xy.x}`);
    style.setProperty('--ball-translate-y', `${xy.y}`);
  }
}
