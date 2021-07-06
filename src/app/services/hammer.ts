import { HammerGestureConfig } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

import Hammer from 'hammerjs';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  events = ['pan', 'panend', 'panstart', 'pinch', 'pinchend', 'pinchstart'];
  overrides = {
    pan: {
      direction: Hammer.DIRECTION_ALL,
      enable: true,
      pointers: 1,
      threshold: 8
    },
    pinch: { enable: true, pointers: 2 },
    press: { enable: false },
    rotate: { enable: false },
    swipe: { enable: false },
    tap: { enable: false }
  };
}
