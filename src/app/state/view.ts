import { DataAction } from '@ngxs-labs/data/decorators';
import { Injectable } from '@angular/core';
import { NgxsAfterBootstrap } from '@ngxs/store';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Payload } from '@ngxs-labs/data/decorators';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';

import { patch } from '@ngxs/store/operators';

// NOTE: we tried to support pinch to zoom but it wasn't satisfactory

export interface ViewStateModel {
  origin: [number, number];
  scale: number;
  translate: [number, number];
}

@Injectable({ providedIn: 'root' })
@StateRepository()
@State<ViewStateModel>({
  name: 'view',
  defaults: {
    origin: [0, 0],
    scale: 1,
    translate: [0, 0]
  }
})
export class ViewState
  extends NgxsDataRepository<ViewStateModel>
  implements NgxsAfterBootstrap
{
  // actions

  @DataAction({ insideZone: true })
  scale(
    @Payload('ViewState.scale') scale: number,
    [x, y]: [number, number]
  ): void {
    this.ctx.setState(patch({ origin: [x, y], scale }));
    // set CSS variables
    const style = document.body.style;
    style.setProperty('--app-origin-x', `${x}`);
    style.setProperty('--app-origin-y', `${y}`);
    style.setProperty('--app-scale', `${scale}`);
  }

  @DataAction({ insideZone: true })
  translate(@Payload('ViewState.translate') [x, y]: [number, number]): void {
    this.ctx.setState(patch({ origin: [0, 0], translate: [x, y] }));
    // set CSS variables
    const style = document.body.style;
    style.setProperty('--app-origin-x', `${this.snapshot.origin[0]}`);
    style.setProperty('--app-origin-y', `${this.snapshot.origin[1]}`);
    style.setProperty('--app-translate-x', `${x}`);
    style.setProperty('--app-translate-y', `${y}`);
  }

  /* eslint-disable @typescript-eslint/member-ordering */

  ngxsAfterBootstrap(): void {
    super.ngxsAfterBootstrap();
    // initialize CSS variables
    const style = document.body.style;
    style.setProperty('--app-origin-x', `${this.snapshot.origin[0]}`);
    style.setProperty('--app-origin-y', `${this.snapshot.origin[1]}`);
    style.setProperty('--app-scale', `${this.snapshot.scale}`);
    style.setProperty('--app-translate-x', `${this.snapshot.translate[0]}`);
    style.setProperty('--app-translate-y', `${this.snapshot.translate[1]}`);
  }
}
