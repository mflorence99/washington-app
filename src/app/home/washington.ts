import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-washington',
  templateUrl: './washington.svg'
})
export class WashingtonComponent {}
