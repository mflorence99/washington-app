import { Map } from './maps';
import { MAPS } from './maps';

import { Computed } from '@ngxs-labs/data/decorators';
import { DataAction } from '@ngxs-labs/data/decorators';
import { Injectable } from '@angular/core';
import { NgxsAfterBootstrap } from '@ngxs/store';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Payload } from '@ngxs-labs/data/decorators';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';

import { patch } from '@ngxs/store/operators';

export interface ModelStateModel {
  map: Map;
}

@Injectable({ providedIn: 'root' })
@StateRepository()
@State<ModelStateModel>({
  name: 'map',
  defaults: {
    map: MAPS[0]
  }
})
export class ModelState
  extends NgxsDataRepository<ModelStateModel>
  implements NgxsAfterBootstrap
{
  // actions

  @DataAction({ insideZone: true })
  switchTo(@Payload('ModelState.switchTo') map: Map): void {
    this.ctx.setState(patch({ map }));
  }

  // accessors

  @Computed() get map(): Map {
    return this.snapshot.map;
  }
}
