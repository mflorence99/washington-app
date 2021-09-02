import { Build } from '../state/build';
import { Params } from '../services/params';
import { SingletonAlertService } from '../services/alert';

import { environment } from '../../environments/environment';

import { ApplicationRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';
import { UnrecoverableStateEvent } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker';

import { catchError } from 'rxjs/operators';
import { concat } from 'rxjs';
import { first } from 'rxjs/operators';
import { interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VersionService {
  #checkVersionLegacy$ = new Subject<void>();

  constructor(
    private appRef: ApplicationRef,
    private http: HttpClient,
    public params: Params,
    private sac: SingletonAlertService,
    private swUpdate: SwUpdate
  ) {
    this.#pollVersion();
  }

  #checkUnrecoverableServiceWorker(): void {
    this.swUpdate.unrecoverable.subscribe((event: UnrecoverableStateEvent) => {
      console.error('🔥 Unrecoverable PWA error', event.reason);
      this.#newVersionDetected();
    });
  }

  #checkVersionServiceWorker(): void {
    this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
      console.log(
        '%c...new PWA version detected',
        'color: wheat',
        event.available.hash
      );
      this.#newVersionDetected();
    });
  }

  #newVersionDetected(): void {
    this.sac.createAndPresent({
      header: 'New version detected',
      message: 'Please activate it now',
      buttons: [
        {
          text: 'Activate',
          handler: (): void => {
            if (this.swUpdate.isEnabled)
              this.swUpdate.activateUpdate().then(() => location.reload());
            else location.reload();
          }
        }
        // {
        //   text: 'Later',
        //   role: 'cancel',
        //   handler: (): void => {
        //     if (!this.swUpdate.isEnabled) {
        //       // 👇 once the user says "later" we won't check again in legacy
        //       //    mode -- but we must when using service workers, because
        //       //    a bookmarked PWA may never be restarted
        //       this.#checkVersionLegacy$.next();
        //       this.#checkVersionLegacy$.complete();
        //       console.log(
        //         '%cUser declines further legacy version checks',
        //         'color: orchid'
        //       );
        //     }
        //   }
        // }
      ]
    });
  }

  #pollVersion(): void {
    if (this.swUpdate.isEnabled) {
      this.#checkUnrecoverableServiceWorker();
      this.#checkVersionServiceWorker();
      this.#pollVersionServiceWorker();
    }
    // 👇 for now, this will only be called for localhost as
    //    any other host activates service workers in module.ts
    else this.#pollVersionLegacy();
  }

  #pollVersionLegacy(): void {
    const params = this.params.version;
    timer(params.checkVersionLegacyAfter, params.checkVersionInterval)
      .pipe(
        takeUntil(this.#checkVersionLegacy$),
        mergeMap(() =>
          this.http
            .get<Build>(`assets/build.json`, {
              params: {
                x: Math.random()
              }
            })
            .pipe(catchError(() => of(environment.build)))
        )
      )
      .subscribe((build: Build) => {
        console.log('%cPolling for new legacy version...', 'color: khaki');
        if (build.id !== environment.build.id) {
          console.log(
            '%c...new legacy version detected',
            'color: tan',
            build.id,
            build.date
          );
          this.#newVersionDetected();
        }
      });
  }

  #pollVersionServiceWorker(): void {
    const appIsStable$ = this.appRef.isStable.pipe(
      first((isStable) => isStable)
    );
    const periodically$ = interval(this.params.version.checkVersionInterval);
    concat(appIsStable$, periodically$).subscribe((): any => {
      console.log('%cPolling for new PWA version...', 'color: moccasin');
      this.swUpdate.checkForUpdate().then();
    });
  }
}
