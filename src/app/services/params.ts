import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Params {
  common = {
    toastDuration: 5000
  };

  geolocation = {
    maxIntervalBetweenPositions: 3 * 1000
  };

  geometry = {
    margin: -32,
    scales: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5]
  };

  geosimulator = {
    maxIntervalBetweenPositions: 100
  };

  google = {
    // 👇 don't panic! domain protected
    apiKey: 'AIzaSyCAYavpwIUZOayj72XA3AZYJeYjlVscqvk',
    unauthorizedApiKey: 'xxx'
  };

  home = {
    details: {
      mapTypeId: 'hybrid',
      zoom: 15
    },
    page: {
      backoff: {
        initialInterval: 100,
        maxInterval: 1000,
        maxRetries: 5
      },
      // 👇 make sure AFTER service worker check of 30s
      checkVersionAfter: 60 * 1000, // ms
      checkVersionInterval: 120 * 1000, // ms
      highlightedLotOutline: 'var(--ion-color-danger)'
    },
    retrySrc: {
      interval: 3 * 1000
    },
    tiles: {
      // 👇 size of one tile
      intersectionMargin: 256
    },
    tracker: {
      backoff: {
        initialInterval: 100,
        maxInterval: 1000
      },
      margin: 64
    }
  };

  selection = {
    aliases: {
      /* eslint-disable @typescript-eslint/naming-convention */
      CIRCLE: 'CIR',
      DRIVE: 'DR',
      EAST: 'E',
      HEIGHTS: 'HGTS',
      IS: 'ISLAND',
      LANE: 'LN',
      MOUNTAIN: 'MT',
      NORTH: 'N',
      ROAD: 'RD',
      SOUTH: 'S',
      STREET: 'STREET',
      TERRACE: 'TERR',
      WASH: 'WASHINGTON',
      WEST: 'W'
      /* eslint-enable @typescript-eslint/naming-convention */
    }
  };
}
