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
      scale: 1,
      translate: [0, 0]
    };
  }

  // actions

  @DataAction({ insideZone: true })
  initialize(@Payload('ViewState.initialize') view: View): void {
    const mapID = this.model.mapID;
    if (!this.ctx.getState()[mapID])
      this.ctx.setState(patch({ [mapID]: view }));
  }

  @DataAction({ insideZone: true })
  scale(@Payload('ViewState.scale') scale: number): void {
    const mapID = this.model.mapID;
    if (!this.ctx.getState()[mapID])
      this.ctx.setState(patch({ [mapID]: ViewState.defaultView() }));
    this.ctx.setState(patch({ [mapID]: patch({ scale }) }));
  }

  @DataAction({ insideZone: true })
  translate(@Payload('ViewState.translate') [x, y]: [number, number]): void {
    const mapID = this.model.mapID;
    if (!this.ctx.getState()[mapID])
      this.ctx.setState(patch({ [mapID]: ViewState.defaultView() }));
    this.ctx.setState(patch({ [mapID]: patch({ translate: [x, y] }) }));
  }

  // accessors

  @Computed() get view(): View {
    return this.snapshot[this.model.mapID] ?? ViewState.defaultView();
  }
}
