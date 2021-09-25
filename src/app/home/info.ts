import { DESC_BY_USAGE } from '../state/parcels';
import { USAGES } from '../state/parcels';

import { environment } from '../../environments/environment';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResizedEvent } from 'angular-resize-event';
import { ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-info',
  styleUrls: ['./info.scss'],
  templateUrl: './info.html'
})
export class InfoComponent {
  @HostBinding('class') cssClass: 'landscape' | 'portrait' = 'landscape';

  env = environment;

  constructor(private mc: ModalController) {}

  dismiss(): void {
    this.mc.dismiss();
  }

  resize(event: ResizedEvent): void {
    if (event.newRect.width >= event.newRect.height)
      this.cssClass = 'landscape';
    else if (event.newRect.width < event.newRect.height)
      this.cssClass = 'portrait';
  }

  usages(): [string, string][] {
    return USAGES.map((usage) => [usage, DESC_BY_USAGE[usage]]);
  }
}
