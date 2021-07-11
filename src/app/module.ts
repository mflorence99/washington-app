import { HammerConfig } from './services/hammer';
import { ModelState } from './state/model';
import { RootPage } from './root';
import { RootRouting } from './routing';
import { SelectionState } from './state/selection';
import { StorageService } from './services/storage';
import { ViewState } from './state/view';

import { environment } from '../environments/environment';

import { AngularResizedEventModule } from 'angular-resize-event';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserModule } from '@angular/platform-browser';
import { Drivers } from '@ionic/storage';
import { GoogleMapsModule } from '@angular/google-maps';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { NgModule } from '@angular/core';
import { NgxsAsyncStoragePluginModule } from '@ngxs-labs/async-storage-plugin';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
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
    IonicStorageModule.forRoot({
      name: 'washington',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    }),
    NgxsModule.forRoot([ModelState, SelectionState, ViewState], {
      developmentMode: !environment.production
    }),
    NgxsAsyncStoragePluginModule.forRoot(StorageService, {
      key: ['map', 'selection', 'view']
    }),
    NgxsDataPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      collapsed: false,
      logger: console
    }),
    RootRouting
  ],

  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class RootModule {}
