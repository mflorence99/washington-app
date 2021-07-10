import { ModelState } from './model';

import { Computed } from '@ngxs-labs/data/decorators';
import { DataAction } from '@ngxs-labs/data/decorators';
import { Injectable } from '@angular/core';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Payload } from '@ngxs-labs/data/decorators';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';

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
export class ViewState extends NgxsDataRepository<ViewStateModel> {
  //
  constructor(public model: ModelState) {
    super();
  }

  static defaultView(): View {
    return {
      origin: [0, 0],
      scale: 1 / window.devicePixelRatio,
      translate: [0, 0]
    };
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
    setTimeout(() => this.scaled(scale, [x, y]), 0);
  }

  @DataAction({ insideZone: true })
  scaled(
    @Payload('ViewState.scaled') _scale: number,
    [_x, _y]: [number, number]
  ): void {}

  @DataAction({ insideZone: true })
  translate(@Payload('ViewState.translate') [x, y]: [number, number]): void {
    const mapID = this.model.map.id;
    if (!this.ctx.getState()[mapID])
      this.ctx.setState(patch({ [mapID]: ViewState.defaultView() }));
    this.ctx.setState(
      patch({ [mapID]: patch({ origin: [0, 0], translate: [x, y] }) })
    );
    setTimeout(() => this.translated([x, y]), 0);
  }

  @DataAction({ insideZone: true })
  translated(
    @Payload('ViewState.translated') [_x, _y]: [number, number]
  ): void {}

  // accessors

  @Computed() get view(): View {
    return this.snapshot[this.model.map.id] ?? ViewState.defaultView();
  }
}
