import { reduxMiddleware } from '../../../main';

import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { NGXS_PLUGINS } from '@ngxs/store';
import { NgxsPlugin } from '@ngxs/store';

import { tap } from 'rxjs/operators';

// @see https://www.ngxs.io/plugins/intro

export const LOGROCKET_PLUGIN_OPTIONS = new InjectionToken(
  'LOGROCKET_PLUGIN_OPTIONS'
);

@Injectable()
export class LogRocketPlugin implements NgxsPlugin {
  constructor(@Inject(LOGROCKET_PLUGIN_OPTIONS) private options: any) {}

  // NOTE: these colors hacked to look OK in dark mode

  handle(state, action, next): any {
    // decode the action
    const key = Object.keys(action)[0] ?? action.constructor.name;
    const payload = action[key];

    // start logging group with old state
    console.group(key);
    if (payload) console.log(`%cpayload`, 'color: hotpink', payload);
    console.log('%cold', 'color: darkkhaki', state);

    // ... now we have the new state
    return next(state, action).pipe(
      tap((result) => {
        console.log('%cnew', 'color: skyblue', state);
        console.groupEnd();
        reduxMiddleware({ getState: () => state })(() => result)(key);
      })
    );
  }
}

@NgModule()
export class LogRocketPluginModule {
  static forRoot(config?: any): ModuleWithProviders<any> {
    return {
      ngModule: LogRocketPluginModule,
      providers: [
        {
          provide: NGXS_PLUGINS,
          useClass: LogRocketPlugin,
          multi: true
        },
        {
          provide: LOGROCKET_PLUGIN_OPTIONS,
          useValue: config
        }
      ]
    };
  }
}
