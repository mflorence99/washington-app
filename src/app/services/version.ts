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
        '%cNew PWA version detected',
        'color: wheat',
        event.available.hash
      );
      this.#newVersionDetected();
    });
  }

  #newVersionDetected(): void {
    this.sac.createAndPresent({
      header: 'New version detected',
      message: 'Reload?',
      buttons: [
        {
          text: 'Now',
          handler: (): void => window.location.reload()
        },
        {
          text: 'Later',
          role: 'cancel',
          handler: (): void => {
            // 👇 once the user says "later" we won't check again in legacy
            //    mode -- but we must when using service workers, because
            //    a boommarked PWA may never be restarted
            this.#checkVersionLegacy$.next();
            this.#checkVersionLegacy$.complete();
          }
        }
      ]
    });
  }

  #pollVersion(): void {
    if (this.swUpdate.isEnabled) {
      this.#checkUnrecoverableServiceWorker();
      this.#checkVersionServiceWorker();
      this.#pollVersionServiceWorker();
    }
    // 👇 for now, this will never be called as we always enable
    //    the service worker and let it fail if not HTTPS etc
    else this.#pollVersionLegacy();
  }

  #pollVersionLegacy(): void {
    timer(
      this.params.version.checkVersionAfter,
      this.params.version.checkVersionInterval
    )
      .pipe(
        takeUntil(this.#checkVersionLegacy$),
        mergeMap(() =>
          this.http.get<Build>(`${location.href}/assets/build.json`, {
            params: {
              x: Math.random()
            }
          })
        ),
        catchError(() => of(environment.build))
      )
      .subscribe((build: Build) => {
        console.log('%cPolling for new legacy version...', 'color: khaki');
        if (build.id !== environment.build.id) {
          console.log(
            '%cNew legacy version detected',
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
      this.swUpdate.checkForUpdate();
    });
  }
}
