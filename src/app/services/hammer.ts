import { HammerGestureConfig } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

import Hammer from 'hammerjs';

// NOTE: we tried to support pinch to zoom but it wasn't satisfactory

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  events = [
    'pan',
    'panend',
    'panstart' /* , 'pinch', 'pinchend', 'pinchstart' */
  ];
  overrides = {
    pan: {
      direction: Hammer.DIRECTION_ALL,
      enable: true,
      pointers: 1,
      threshold: 1
    },
    // pinch: { enable: true, pointers: 2 },
    pinch: { enable: false },
    press: { enable: false },
    rotate: { enable: false },
    swipe: { enable: false },
    tap: { enable: false }
  };
}
