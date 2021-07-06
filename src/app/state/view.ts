import { DataAction } from '@ngxs-labs/data/decorators';
import { Injectable } from '@angular/core';
import { NgxsAfterBootstrap } from '@ngxs/store';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Payload } from '@ngxs-labs/data/decorators';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';

import { patch } from '@ngxs/store/operators';

export interface ViewStateModel {
  scale: number;
  translate: [number, number];
}

@Injectable({ providedIn: 'root' })
@StateRepository()
@State<ViewStateModel>({
  name: 'view',
  defaults: {
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
  scale(@Payload('LintelState.scale') scale: number): void {
    this.ctx.setState(patch({ scale }));
    // set CSS variables
    const style = document.body.style;
    style.setProperty('--app-scale', `${scale}`);
  }

  @DataAction({ insideZone: true })
  translate(@Payload('LintelState.translate') [x, y]: [number, number]): void {
    this.ctx.setState(patch({ translate: [x, y] }));
    // set CSS variables
    const style = document.body.style;
    style.setProperty('--app-translate-x', `${x}`);
    style.setProperty('--app-translate-y', `${y}`);
  }

  /* eslint-disable @typescript-eslint/member-ordering */

  ngxsAfterBootstrap(): void {
    super.ngxsAfterBootstrap();
    // initialize CSS variables
    const style = document.body.style;
    style.setProperty('--app-scale', `${this.snapshot.scale}`);
    style.setProperty('--app-translate-x', `${this.snapshot.translate[0]}`);
    style.setProperty('--app-translate-y', `${this.snapshot.translate[1]}`);
  }
}
