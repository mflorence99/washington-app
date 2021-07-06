import { ViewState } from '../state/view';

import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Town of Washington </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true" [scrollX]="false" [scrollY]="false">
      <img
        #theMap
        (pan)="translate($event)"
        (panend)="translateInit()"
        (panstart)="translateInit()"
        (pinch)="scale($event)"
        src="assets/washington.jpeg"
      />
    </ion-content> `
})
export class HomePage {
  @ViewChild('theMap', { static: false }) theMap: ElementRef<HTMLImageElement>;

  private origin: [number, number];

  constructor(private view: ViewState) {}

  // TEMPORARY

  scale(event: HammerInput): void {
    console.log(`SCALE dist=${event.distance}`);
  }

  translate(event: HammerInput): void {
    if (this.origin) {
      const element = this.theMap.nativeElement;
      const translateX = event.deltaX + this.origin[0];
      const maxX = element.parentElement.offsetWidth - element.offsetWidth;
      const translateY = event.deltaY + this.origin[1];
      const maxY = element.parentElement.offsetHeight - element.offsetHeight;
      // clamp translation to what fits in container
      this.view.translate([
        Math.max(maxX, Math.min(0, translateX)),
        Math.max(maxY, Math.min(0, translateY))
      ]);
    }
  }

  translateInit(): void {
    this.origin = this.view.snapshot.translate;
  }
}
