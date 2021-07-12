import { RootModule } from './app/module';

import { environment } from './environments/environment';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import LogRocket from 'logrocket';

console.table(environment.package);
console.table(environment.build);

LogRocket.init('9taxee/washington-app', {
  console: {
    isEnabled: true
  },
  release: environment.package.version
});

export const reduxMiddleware = LogRocket.reduxMiddleware({});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(RootModule)
  .catch((err) => console.log(err));
