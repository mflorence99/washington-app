import { ModelState } from '../state/model';
import { ViewState } from '../state/view';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-lots',
  template: `<svg-icon [src]="model.map.lots"></svg-icon>`
})
export class LotsComponent {
  constructor(public model: ModelState, public view: ViewState) {}
}
