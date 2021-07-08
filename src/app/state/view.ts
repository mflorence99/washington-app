import { ModelState } from './model';

import { Actions } from '@ngxs/store';
import { Computed } from '@ngxs-labs/data/decorators';
import { DataAction } from '@ngxs-labs/data/decorators';
import { Injectable } from '@angular/core';
import { NgxsAfterBootstrap } from '@ngxs/store';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { NgxsOnInit } from '@ngxs/store';
import { Payload } from '@ngxs-labs/data/decorators';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';

import { filter } from 'rxjs/operators';
import { patch } from '@ngxs/store/operators';

export interface View {
  origin: [number, number];
  scale: number;
  translate: [number, number];
}

export type ViewStateModel = Record<string, View>;

@Injectable({ providedIn: 'root' })
@StateRepository()
@State<ViewStateModel>({
  name: 'view',
  defaults: {}
})
export class ViewState
  extends NgxsDataRepository<ViewStateModel>
  implements NgxsAfterBootstrap, NgxsOnInit
{
  //
  constructor(public actions$: Actions, public model: ModelState) {
    super();
  }

  static defaultView(): View {
    return {
      origin: [0, 0],
      scale: 1 / window.devicePixelRatio,
      translate: [0, 0]
    };
  }

  ngxsAfterBootstrap(): void {
    super.ngxsAfterBootstrap();
    this.setProperties();
  }

  ngxsOnInit(): void {
    super.ngxsOnInit();
    this.handleActions$();
  }

  // actions

  @DataAction({ insideZone: true })
  scale(
    @Payload('ViewState.scale') scale: number,
    [x, y]: [number, number]
  ): void {
    const mapID = this.model.map.id;
    if (!this.ctx.getState()[mapID])
      this.ctx.setState(patch({ [mapID]: ViewState.defaultView() }));
    this.ctx.setState(patch({ [mapID]: patch({ origin: [x, y], scale }) }));
    // set CSS variables
    const style = document.body.style;
    style.setProperty('--app-origin-x', `${x}`);
    style.setProperty('--app-origin-y', `${y}`);
    style.setProperty('--app-scale', `${scale}`);
  }

  @DataAction({ insideZone: true })
  translate(@Payload('ViewState.translate') [x, y]: [number, number]): void {
    const mapID = this.model.map.id;
    if (!this.ctx.getState()[mapID])
      this.ctx.setState(patch({ [mapID]: ViewState.defaultView() }));
    this.ctx.setState(
      patch({ [mapID]: patch({ origin: [0, 0], translate: [x, y] }) })
    );
    // set CSS variables
    const style = document.body.style;
    style.setProperty('--app-origin-x', `${this.view.origin[0]}`);
    style.setProperty('--app-origin-y', `${this.view.origin[1]}`);
    style.setProperty('--app-translate-x', `${x}`);
    style.setProperty('--app-translate-y', `${y}`);
  }

  // accessors

  @Computed() get view(): View {
    return this.snapshot[this.model.map.id] ?? ViewState.defaultView();
  }

  // private methods

  private handleActions$(): void {
    this.actions$
      .pipe(
        filter(
          ({ action, status }) =>
            action['ModelState.switchTo'] && status === 'SUCCESSFUL'
        )
      )
      .subscribe(() => this.setProperties());
  }

  private setProperties(): void {
    const style = document.body.style;
    style.setProperty('--app-origin-x', `${this.view.origin[0]}`);
    style.setProperty('--app-origin-y', `${this.view.origin[1]}`);
    style.setProperty('--app-scale', `${this.view.scale}`);
    style.setProperty('--app-translate-x', `${this.view.translate[0]}`);
    style.setProperty('--app-translate-y', `${this.view.translate[1]}`);
  }
}
