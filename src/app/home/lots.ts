import { ModelState } from '../state/model';
import { ViewState } from '../state/view';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-lots',
  template: `<svg-icon [src]="model.snapshot.map.lots"></svg-icon>`
})
export class LotsComponent {
  constructor(public model: ModelState, public view: ViewState) {}
}
