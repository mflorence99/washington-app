import { DetailsComponent } from './details';
import { HomePage } from './page';
import { HomeRouting } from './routing';

import { AngularResizedEventModule } from 'angular-resize-event';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomePage, DetailsComponent],

  imports: [
    AngularResizedEventModule,
    AngularSvgIconModule,
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    IonicModule,
    HomeRouting
  ]
})
export class HomeModule {}
