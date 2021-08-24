import { GeometryService } from './geometry';
import { Params } from './params';

import BOUNDARY from '../../assets/boundary.json';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs';

import { finalize } from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GeosimulatorService extends Observable<GeolocationPosition> {
  constructor(geometry: GeometryService, params: Params) {
    let counter = 0;
    let lastPoint: number[] = null;
    let loopID = null;

    super((subscriber: Subscriber<GeolocationPosition>) => {
      // coordinates of test path
      const coords = BOUNDARY.features[0].geometry.coordinates[0];
      loopID = setInterval(() => {
        // every N ms emit a new position
        const point = coords[counter];
        const position = {
          coords: {
            latitude: point[1],
            longitude: point[0],
            altitude: null,
            accuracy: Math.random() * 10,
            altitudeAccuracy: null,
            heading: lastPoint
              ? geometry.bearing(
                  { lat: lastPoint[1], lon: lastPoint[0] },
                  { lat: point[1], lon: point[0] }
                )
              : null,
            speed: null
          },
          timestamp: Date.now()
        };
        // 👇 simulate loss of GPS signal
        if (counter === 0 || (counter >= 50 && counter < 60)) {
          console.error(
            `🔥 Geosimulator simulated loss of GPS signal #${counter}`
          );
          subscriber.error({ code: 2, message: 'unavailable' });
          // } else if (counter === 100) {
          //   subscriber.error({ code: 1, message: 'unauthorized' });
        } else subscriber.next(position);
        // setup for next point
        counter += 1;
        if (counter === coords.length) counter = 0;
        lastPoint = point;
      }, params.geosimulator.maxIntervalBetweenPositions);
    });

    return this.pipe(
      finalize(() => clearInterval(loopID)),
      shareReplay({ bufferSize: 1, refCount: true })
    ) as GeosimulatorService;
  }
}
