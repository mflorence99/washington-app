import { Injectable } from '@angular/core';

// 👉 all intervals in milliseconds

@Injectable({ providedIn: 'root' })
export class Params {
  common = {
    toastDuration: 10 * 1000
  };

  geolocation = {
    maxIntervalBetweenPositions: 3 * 1000
  };

  geometry = {
    bezierSmoothing: 0.2,
    margin: -32,
    scales: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5]
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
      printDelay: 250
    },
    lot: {
      pxViewportMargin: 6,
      shortLineThreshold: 8, // pixels
      straightLineThreshold: 30
    },
    page: {
      backoff: {
        initialInterval: 100,
        maxInterval: 1000,
        maxRetries: 5
      },
      // 👇 make sure AFTER service worker check of 30s
      checkVersionAfter: 60 * 1000,
      checkVersionInterval: 120 * 1000,
      highlightedLotOutline: 'var(--ion-color-danger)',
      searchbarDebounceTime: 1000,
      showLotsDelay: 1000
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
    fuzzySearchMinLength: 3,
    fuzzySearchOptions: { limit: 100, threshold: -10000 }
  };
}
