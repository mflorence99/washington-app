import { DESC_BY_USAGE } from '../state/lots';
import { USAGES } from '../state/lots';

import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResizedEvent } from 'angular-resize-event';
import { ViewEncapsulation } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  // NOTE: so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-info',
  styleUrls: ['./info.scss'],
  templateUrl: './info.html'
})
export class InfoComponent {
  @HostBinding('class') cssClass: 'landscape' | 'portrait' | 'square' =
    'square';

  env = environment;

  constructor(private mc: ModalController) {}

  dismiss(): void {
    this.mc.dismiss();
  }

  resize(event: ResizedEvent): void {
    if (event.newWidth === event.newHeight) this.cssClass = 'square';
    else if (event.newWidth > event.newHeight) this.cssClass = 'landscape';
    else if (event.newWidth < event.newHeight) this.cssClass = 'portrait';
  }

  trackByUsage(index: number, usage: [string, string]): string {
    return usage[0];
  }

  usages(): [string, string][] {
    return USAGES.map((usage) => [usage, DESC_BY_USAGE[usage]]);
  }
}
