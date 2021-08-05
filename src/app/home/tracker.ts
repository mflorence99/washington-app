import { DestroyService } from '../services/destroy';
import { GeolocationService } from '../services/geolocation';
import { GeometryService } from '../services/geometry';
import { ModelState } from '../state/model';
import { ViewState } from '../state/view';
import { XY } from '../services/geometry';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ViewEncapsulation } from '@angular/core';

import { takeUntil } from 'rxjs/operators';

const M2FT = 3.28084;

@Component({
  // NOTE: need Default to change SVG attributes
  changeDetection: ChangeDetectionStrategy.Default,
  // NOTE: so that we can manipulate the actual stylesheet in code
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
    private tc: ToastController,
    public view: ViewState
  ) {
    this.handleGeoLocation$();
  }

  private currentPositionLost(): void {
    this.tc
      .create({
        message: 'GPS signal lost',
        duration: 2500,
        color: 'light'
      })
      .then((toast) => toast.present());
  }

  // NOTE: the margin makes sure the tracker doesn't
  // get too close to the edge
  private followTracker(location: XY): void {
    if (!this.geometry.isPointInViewport(location, 56))
      this.geometry.centerPointInViewport(location);
  }

  private handleGeoLocation$(): void {
    this.geolocation$.pipe(takeUntil(this.destroy$)).subscribe({
      complete: () => {
        console.error('Geolocation stream has completed');
      },

      error: (error) => {
        console.error(error);
        this.currentPositionLost();
        this.model.track(false);
      },

      next: (position) => {
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
          (position.coords.accuracy * M2FT * this.model.map.cxScale) /
          this.model.map.ftScale;
        // what is interval between last reading?
        const interval = this.lastTimestamp
          ? position.timestamp - this.lastTimestamp
          : 0;
        this.lastTimestamp = position.timestamp;
        // TODO: how to control direction of rotation animation?
        const heading = position.coords.heading;
        const headingVisibility = heading != null && !isNaN(heading);
        // set properties and repaint
        const style = document.body.style;
        style.setProperty('--ball-accuracy', `${accuracy}`);
        style.setProperty('--ball-heading', `${heading}`);
        style.setProperty(
          '--ball-heading-visibility',
          `${headingVisibility ? 'visible' : 'hidden'}`
        );
        style.setProperty('--ball-interval', `${interval}`);
        style.setProperty('--ball-translate-x', `${xy.x}`);
        style.setProperty('--ball-translate-y', `${xy.y}`);
      }
    });
  }
}
