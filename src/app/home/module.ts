import { CenterComponent } from './center';
import { DetailsComponent } from './details';
import { EastComponent } from './east';
import { HighlandComponent } from './highland';
import { HomePage } from './page';
import { HomeRouting } from './routing';
import { InfoComponent } from './info';
import { IslandComponent } from './island';
import { LAEComponent } from './lae';
import { TrackerComponent } from './tracker';
import { WashingtonComponent } from './washington';

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
    CenterComponent,
    DetailsComponent,
    EastComponent,
    HighlandComponent,
    InfoComponent,
    IslandComponent,
    LAEComponent,
    TrackerComponent,
    WashingtonComponent
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
