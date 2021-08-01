import { GeoSimulatorService } from './services/geo-simulator';
import { HammerConfig } from './services/hammer';
import { LogRocketPluginModule } from './state/plugins/logrocket';
import { ModelState } from './state/model';
import { RootPage } from './root';
import { RootRouting } from './routing';
import { SelectionState } from './state/selection';
import { ViewState } from './state/view';

import { environment } from '../environments/environment';

import * as Sentry from '@sentry/angular';

import { AngularResizedEventModule } from 'angular-resize-event';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { GoogleMapsModule } from '@angular/google-maps';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { IonicRouteStrategy } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { Router } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  bootstrap: [RootPage],

  declarations: [RootPage],

  entryComponents: [],

  imports: [
    AngularResizedEventModule,
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    GoogleMapsModule,
    HammerModule,
    HttpClientModule,
    HttpClientJsonpModule,
    IonicModule.forRoot(),
    NgxsModule.forRoot([ModelState, SelectionState, ViewState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['map', 'selection', 'view']
    }),
    NgxsDataPluginModule.forRoot(),
    LogRocketPluginModule.forRoot(),
    RootRouting
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
        : GeoSimulatorService
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: Sentry.TraceService,
      deps: [Router]
    }
  ]
})
export class RootModule {
  constructor(private trace: Sentry.TraceService) {}
}
