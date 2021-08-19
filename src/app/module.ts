import { DetailsComponent } from './home/details';
import { GeolocationService } from './services/geolocation';
import { GeosimulatorService } from './services/geosimulator';
import { HammerConfig } from './services/hammer';
import { HomePage } from './home/page';
import { InfoComponent } from './home/info';
import { LogRocketPluginModule } from './state/plugins/logrocket';
import { LotLinesComponent } from './home/lot-lines';
import { LotSatelliteComponent } from './home/lot-satellite';
import { LotsComponent } from './home/lots';
import { ModelState } from './state/model';
import { OverlayComponent } from './home/overlay';
import { OverlayState } from './state/overlay';
import { RetrySrcDirective } from './home/retry-src';
import { SelectionState } from './state/selection';
import { TilesComponent } from './home/tiles';
import { TrackerComponent } from './home/tracker';
import { ViewState } from './state/view';

import { environment } from '../environments/environment';

import * as Sentry from '@sentry/angular';

import { AngularResizedEventModule } from 'angular-resize-event';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  bootstrap: [HomePage],

  declarations: [
    HomePage,
    DetailsComponent,
    InfoComponent,
    LotLinesComponent,
    LotSatelliteComponent,
    LotsComponent,
    OverlayComponent,
    RetrySrcDirective,
    TilesComponent,
    TrackerComponent
  ],

  entryComponents: [],

  imports: [
    AngularResizedEventModule,
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    ColorPickerModule,
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    HammerModule,
    HttpClientModule,
    HttpClientJsonpModule,
    IonicModule.forRoot(),
    NgxsModule.forRoot([ModelState, OverlayState, SelectionState, ViewState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['map', 'overlay', 'view']
    }),
    NgxsDataPluginModule.forRoot(),
    LogRocketPluginModule.forRoot(),
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],

  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        logErrors: true,
        showDialog: true
      })
    },
    {
      provide: GeolocationService,
      useClass: environment.production
        ? GeolocationService
        : GeosimulatorService
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ]
})
export class RootModule {}
