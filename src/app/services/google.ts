import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

// @see https://stackoverflow.com/questions/4428915/how-do-i-catch-an-invalid-api-key-for-google-maps

let authenticated = true;

// eslint-disable-next-line @typescript-eslint/dot-notation
window['gm_authFailure'] = (): boolean => (authenticated = false);

@Injectable({ providedIn: 'root' })
export class GoogleService {
  ready$: Observable<boolean>;

  constructor(http: HttpClient) {
    this.ready$ = http
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCAYavpwIUZOayj72XA3AZYJeYjlVscqvk',
        'callback'
      )
      .pipe(
        tap(() =>
          console.log(
            '%cSingleton Google Maps API script loaded',
            'color: tomato'
          )
        ),
        shareReplay(),
        switchMap(() => of(authenticated)),
        catchError(() => of(false))
      );
  }
}
