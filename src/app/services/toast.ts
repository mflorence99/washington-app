import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class SingletonToastService {
  #lastToast: HTMLIonToastElement | null = null;

  constructor(private tc: ToastController) {}

  createAndPresent(options: ToastOptions): void {
    this.tc
      // 👉 all toasters appear in the middle
      .create({ ...options, color: 'light', position: 'middle' })
      .then((toast: HTMLIonToastElement) => {
        try {
          this.#lastToast?.dismiss();
        } catch (ignored) {}
        toast.present();
        this.#lastToast = toast;
      });
  }
}
