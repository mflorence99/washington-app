import { Map } from './maps';
import { MAPS } from './maps';
import { Tile } from './tiles';
import { TILE_CONTAINERS } from './tiles';
import { TileContainer } from './tiles';
import { TILES } from './tiles';

import { Computed } from '@ngxs-labs/data/decorators';
import { DataAction } from '@ngxs-labs/data/decorators';
import { Injectable } from '@angular/core';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Payload } from '@ngxs-labs/data/decorators';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';

import { patch } from '@ngxs/store/operators';

export type DetailsType = 'assessor' | 'measure';

export interface ModelStateModel {
  details: DetailsType;
  follower: boolean;
  mapID: string;
  tracker: boolean;
}

@Injectable({ providedIn: 'root' })
@StateRepository()
@State<ModelStateModel>({
  name: 'map',
  defaults: {
    details: 'assessor',
    follower: false,
    mapID: 'washington',
    tracker: false
  }
})
export class ModelState extends NgxsDataRepository<ModelStateModel> {
  // actions

  @DataAction({ insideZone: true })
  detailsTo(@Payload('ModelState.detailsTo') details: DetailsType): void {
    this.ctx.setState(patch({ details }));
  }

  @DataAction({ insideZone: true })
  follow(@Payload('ModelState.follow') follower: boolean): void {
    this.ctx.setState(patch({ follower }));
  }

  @DataAction({ insideZone: true })
  switchTo(@Payload('ModelState.switchTo') mapID: string): void {
    this.ctx.setState(patch({ mapID }));
  }

  @DataAction({ insideZone: true })
  track(@Payload('ModelState.track') tracker: boolean): void {
    this.ctx.setState(patch({ tracker }));
  }

  // accessors

  @Computed() get details(): DetailsType {
    return this.snapshot.details;
  }

  @Computed() get follower(): boolean {
    return this.snapshot.follower;
  }

  @Computed() get map(): Map {
    return MAPS[this.snapshot.mapID];
  }

  @Computed() get mapID(): string {
    return this.snapshot.mapID;
  }

  @Computed() get tiles(): Tile[] {
    return TILES[this.snapshot.mapID];
  }

  @Computed() get tileContainer(): TileContainer {
    return TILE_CONTAINERS[this.snapshot.mapID];
  }

  @Computed() get tracker(): boolean {
    return this.snapshot.tracker;
  }
}
