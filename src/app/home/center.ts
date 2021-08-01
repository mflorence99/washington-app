import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  // NOTE: need Default to change SVG attributes
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-center',
  templateUrl: './center.svg'
})
export class CenterComponent {}
