import { HammerConfig } from './services/hammer';
import { ModelState } from './state/model';
import { RootPage } from './root';
import { RootRouting } from './routing';
import { StorageService } from './services/storage';
import { ViewState } from './state/view';

import { environment } from '../environments/environment';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserModule } from '@angular/platform-browser';
import { Drivers } from '@ionic/storage';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';
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
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    HammerModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'washington',
      driverOrder: [Drivers.LocalStorage]
    }),
    NgxsModule.forRoot([ModelState, ViewState], {
      developmentMode: !environment.production
    }),
    NgxsAsyncStoragePluginModule.forRoot(StorageService, {
      key: ['map', 'view']
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
