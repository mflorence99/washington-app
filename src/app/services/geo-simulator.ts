import BOUNDARY from '../../assets/boundary.json';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs';

import { finalize } from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class GeoSimulatorService extends Observable<GeolocationPosition> {
  constructor() {
    let counter = 0;
    let lastPoint: number[] = null;
    let loopID = null;
    super((subscriber: Subscriber<GeolocationPosition>) => {
      // coordinates of test path
      const coords = BOUNDARY.features[0].geometry.coordinates[0];
      loopID = setInterval(() => {
        // every N ms emit a new position
        const point = coords[counter];
        const geolocation = {
          coords: {
            latitude: point[1],
            longitude: point[0],
            altitude: null,
            accuracy: Math.random() * 10,
            altitudeAccuracy: null,
            heading: lastPoint
              ? this.bearing(lastPoint[1], lastPoint[0], point[1], point[0])
              : null,
            speed: null
          },
          timestamp: Date.now()
        };
        // setup for next point
        if (counter === 50) subscriber.error({ code: 1, message: 'xxx' });
        else subscriber.next(geolocation);
        counter += 1;
        if (counter === coords.length) counter = 0;
        lastPoint = point;
      }, 250);
    });
    return this.pipe(
      finalize(() => clearInterval(loopID)),
      shareReplay({ bufferSize: 1, refCount: true })
    ) as GeoSimulatorService;
  }

  // @see https://stackoverflow.com/questions/46590154/calculate-bearing-between-2-points-with-javascript

  private bearing(
    startLat: number,
    startLng: number,
    destLat: number,
    destLng: number
  ): number {
    startLat = this.toRadians(startLat);
    startLng = this.toRadians(startLng);
    destLat = this.toRadians(destLat);
    destLng = this.toRadians(destLng);
    const y = Math.sin(destLng - startLng) * Math.cos(destLat);
    const x =
      Math.cos(startLat) * Math.sin(destLat) -
      Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
    const bearing = this.toDegrees(Math.atan2(y, x));
    return (bearing + 360) % 360;
  }
  private toDegrees(radians: number): number {
    return (radians * 180) / Math.PI;
  }

  private toRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }
}
