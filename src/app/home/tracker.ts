import { DestroyService } from '../services/destroy';
import { GeometryService } from '../services/geometry';
import { ModelState } from '../state/model';
import { ViewState } from '../state/view';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
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
    public view: ViewState
  ) {
    this.handleGeoLocation$();
  }

  private handleGeoLocation$(): void {
    this.geolocation$.pipe(takeUntil(this.destroy$)).subscribe((position) => {
      // convert location to position over map
      const location = this.geometry.latlon2xy({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
      // convert accuracy from meters to feet to pixels
      const accuracy =
        (position.coords.accuracy * M2FT * this.model.map.cxScale) /
        this.model.map.ftScale;
      // what is interval between last reading?
      const interval = position.timestamp - this.lastTimestamp;
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
      style.setProperty('--ball-translate-x', `${location.x}`);
      style.setProperty('--ball-translate-y', `${location.y}`);
    });
  }
}
