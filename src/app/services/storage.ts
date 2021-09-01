import { AsyncStorageEngine } from '@ngxs-labs/async-storage-plugin';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

// 👇 we no longer use this, as we simply use the synchronous
//    localStorage-based NgxsStoragePluginModule instead of the
//    problematic asynchronous Ionic StorageModule -- but the code
//    is nifty, so we want to keep it

@Injectable({ providedIn: 'root' })
export class StorageService implements AsyncStorageEngine {
  #storage$: Observable<Storage>;

  constructor(storage: Storage) {
    this.#storage$ = from(storage.create()).pipe(
      tap(() => console.log('%cSingleton storage DB created', 'color: orange')),
      shareReplay()
    );
  }

  clear(): void {
    this.#storage$
      .pipe(mergeMap((storage) => from(storage.clear())))
      .subscribe();
  }

  getItem(key: any): Observable<any> {
    return this.#storage$.pipe(mergeMap((storage) => from(storage.get(key))));
  }

  key(val: number): Observable<string> {
    return this.#storage$.pipe(
      mergeMap((storage) => from(storage.keys().then((keys) => keys[val])))
    );
  }

  length(): Observable<number> {
    return this.#storage$.pipe(mergeMap((storage) => from(storage.length())));
  }

  removeItem(key: any): void {
    this.#storage$
      .pipe(mergeMap((storage) => from(storage.remove(key))))
      .subscribe();
  }

  setItem(key: any, value: any): void {
    this.#storage$
      .pipe(mergeMap((storage) => from(storage.set(key, value))))
      .subscribe();
  }
}
