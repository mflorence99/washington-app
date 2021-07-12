import { RootModule } from './app/module';

import { environment } from './environments/environment';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import LogRocket from 'logrocket';

LogRocket.init('9taxee/washington-app', {
  console: {
    isEnabled: true
  },
  release: '0.0.0'
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(RootModule)
  .catch((err) => console.log(err));
