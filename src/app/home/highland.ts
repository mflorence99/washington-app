import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  // 👇 need Default to change SVG attributes
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-highland',
  templateUrl: './highland.svg'
})
export class HighlandComponent {}
