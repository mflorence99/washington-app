import { Lot } from '../state/parcels';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-lot-blueprint',
  styleUrls: ['./lot-blueprint.scss'],
  templateUrl: './lot-blueprint.html'
})
export class LotBlueprintComponent {
  @Input() lot: Lot;
}
