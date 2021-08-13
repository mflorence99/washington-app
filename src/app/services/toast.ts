import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class SingletonToastService {
  private lastToast: HTMLIonToastElement;

  constructor(private tc: ToastController) {}

  createAndPresent(options: ToastOptions): void {
    this.tc.create(options).then((toast: HTMLIonToastElement) => {
      try {
        this.lastToast?.dismiss();
      } catch (ignored) {}
      toast.present();
      this.lastToast = toast;
    });
  }
}
