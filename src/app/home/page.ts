import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Blank </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <img src="assets/east.jpeg" />
    </ion-content> `
})
export class HomePage {
  constructor() {}
}
