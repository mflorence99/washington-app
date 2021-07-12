import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

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
        map(() => true),
        catchError(() => of(false))
      );
  }
}
