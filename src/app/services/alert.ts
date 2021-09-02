import { AlertController } from '@ionic/angular';
import { AlertOptions } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SingletonAlertService {
  #lastAlert: HTMLIonAlertElement;

  constructor(private tc: AlertController) {}

  createAndPresent(options: AlertOptions): void {
    this.tc.create(options).then((alert: HTMLIonAlertElement) => {
      try {
        this.#lastAlert?.dismiss();
      } catch (ignored) {}
      alert.present();
      this.#lastAlert = alert;
    });
  }
}
