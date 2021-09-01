import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOptions } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class SingletonModalService {
  #lastModal: HTMLIonModalElement;

  constructor(private mc: ModalController) {}

  createAndPresent(options: ModalOptions): void {
    this.mc.create(options).then((modal: HTMLIonModalElement) => {
      try {
        this.#lastModal?.dismiss();
      } catch (ignored) {}
      modal.present();
      this.#lastModal = modal;
    });
  }
}
