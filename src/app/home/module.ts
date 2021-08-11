import { DetailsComponent } from './details';
import { HomePage } from './page';
import { HomeRouting } from './routing';
import { InfoComponent } from './info';
import { LotsComponent } from './lots';
import { TilesComponent } from './tiles';
import { TrackerComponent } from './tracker';

import { AngularResizedEventModule } from 'angular-resize-event';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HomePage,
    DetailsComponent,
    InfoComponent,
    LotsComponent,
    TilesComponent,
    TrackerComponent
  ],

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
