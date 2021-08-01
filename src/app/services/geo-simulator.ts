import BOUNDARY from '../../assets/boundary.json';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class GeoSimulatorService extends Observable<void> {
  private counter = 0;
  private lastPoint;
  private simulator$ = new Subject<GeolocationPosition>();

  constructor() {
    // client will listen on geolocation$
    super((subscriber: any) => this.simulator$.subscribe(subscriber));
    // coordinates of test path
    const coords = BOUNDARY.features[0].geometry.coordinates[0];
    setInterval(() => {
      // every N ms emit a new position
      const point = coords[this.counter];
      const geolocation = {
        coords: {
          latitude: point[1],
          longitude: point[0],
          altitude: null,
          accuracy: Math.random() * 10,
          altitudeAccuracy: null,
          heading: this.lastPoint
            ? this.bearing(
                this.lastPoint[1],
                this.lastPoint[0],
                point[1],
                point[0]
              )
            : null,
          speed: null
        },
        timestamp: Date.now()
      };
      // setup for next point
      this.simulator$.next(geolocation);
      this.counter += 1;
      if (this.counter === coords.length) this.counter = 0;
      this.lastPoint = point;
    }, 250);
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
