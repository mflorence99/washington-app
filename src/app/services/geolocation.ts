// @see https://github.com/ng-web-apis/geolocation/blob/master/projects/geolocation/src/services/geolocation.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs';

import { finalize } from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GeolocationService extends Observable<GeolocationPosition> {
  constructor() {
    let lastPosition = null;
    let stationaryPositionID = null;
    let watchPositionID = null;

    super((subscriber: Subscriber<GeolocationPosition>) => {
      watchPositionID = navigator.geolocation.watchPosition(
        (position) => {
          lastPosition = position;
          subscriber.next(position);
        },
        (error) => {
          console.error(error);
          subscriber.error(error);
        }
      );

      // NOTE: the UI reacts to movement so keep ticking
      // even if we're stationary
      stationaryPositionID = setInterval(() => {
        if (lastPosition) subscriber.next(lastPosition);
      }, 1000);
    });

    return this.pipe(
      finalize(() => {
        navigator.geolocation.clearWatch(watchPositionID);
        clearInterval(stationaryPositionID);
      }),
      shareReplay({ bufferSize: 1, refCount: true })
    ) as GeolocationService;
  }
}
