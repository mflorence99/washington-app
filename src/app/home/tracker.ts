import { ModelState } from '../state/model';

import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // NOTE: so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-tracker',
  styleUrls: ['./tracker.scss'],
  templateUrl: './tracker.html'
})
export class TrackerComponent implements OnDestroy, OnInit {
  // TODO: hack
  innerColor = '#428cff';
  innerRadius = [5, 6, 7, 8, 9, 10, 10, 10, 10, 9, 8, 7, 6, 5];

  // TODO: hack
  outerColor = '#FFFFFF';
  outerRadius = 12;

  radiusStep = 5;

  private afid;
  private lastRadiusStep = 0;

  constructor(private cdf: ChangeDetectorRef, public model: ModelState) {}

  ngOnDestroy(): void {
    if (this.afid) cancelAnimationFrame(this.afid);
  }

  ngOnInit(): void {
    this.afid = requestAnimationFrame(this.animate.bind(this));
  }

  // NOTE: animate every N ms
  private animate(timestamp: DOMHighResTimeStamp): void {
    if (timestamp - this.lastRadiusStep >= 120) {
      this.radiusStep += 1;
      if (this.radiusStep >= this.innerRadius.length) this.radiusStep = 0;
      this.cdf.markForCheck();
      this.lastRadiusStep = timestamp;
    }
    // set up for next frame
    this.afid = requestAnimationFrame(this.animate.bind(this));
  }
}
