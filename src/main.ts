import { RootModule } from './app/module';

import { environment } from './environments/environment';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(RootModule)
  .catch((err) => console.log(err));
