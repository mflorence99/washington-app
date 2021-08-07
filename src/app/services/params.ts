import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Params {
  common = {
    toastDuration: 5000
  };

  geolocation = {
    maxIntervalBetweenPositions: 1000
  };

  geometry = {
    scales: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5]
  };

  geosimulator = {
    maxIntervalBetweenPositions: 100
  };

  google = {
    // NOTE: don't panic! domain protected
    apiKey: 'AIzaSyCAYavpwIUZOayj72XA3AZYJeYjlVscqvk'
  };

  home = {
    details: {
      mapTypeId: 'hybrid',
      zoom: 15
    },
    page: {
      checkVersionAfter: 5000,
      checkVersionInterval: 120000,
      highlightedLotOutline: 'var(--ion-color-danger)'
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