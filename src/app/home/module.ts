import { HomePage } from './page';
import { HomeRouting } from './routing';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomePage],

  imports: [
    AngularSvgIconModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRouting
  ]
})
export class HomeModule {}
