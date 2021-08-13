import { HammerGestureConfig } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

import Hammer from 'hammerjs';

// 👇 we tried to support pinch to zoom but it wasn't satisfactory

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  events = ['pan', 'panend', 'panstart'];
  overrides = {
    pan: {
      direction: Hammer.DIRECTION_ALL,
      enable: true
    },
    pinch: { enable: false },
    press: { enable: false },
    rotate: { enable: false },
    swipe: { enable: false },
    tap: { enable: true }
  };
}
