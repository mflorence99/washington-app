import { Lot } from '../state/parcels';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  selector: 'app-lot-diagram',
  styleUrls: ['./lot-diagram.scss'],
  templateUrl: './lot-diagram.html'
})
export class LotDiagramComponent {
  @Input() lot: Lot;
}
