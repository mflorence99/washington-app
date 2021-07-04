import { RootPage } from './root';
import { RootRouting } from './routing';

import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { IonicRouteStrategy } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  bootstrap: [RootPage],

  declarations: [RootPage],

  entryComponents: [],

  imports: [BrowserModule, IonicModule.forRoot(), RootRouting],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class RootModule {}
