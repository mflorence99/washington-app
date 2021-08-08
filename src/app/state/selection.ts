import { Lot } from './parcels';
import { LOTS_BY_ADDRESS } from './parcels';
import { LOTS_BY_ID } from './parcels';
import { Params } from '../services/params';

import { Computed } from '@ngxs-labs/data/decorators';
import { DataAction } from '@ngxs-labs/data/decorators';
import { Injectable } from '@angular/core';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Payload } from '@ngxs-labs/data/decorators';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';

import { patch } from '@ngxs/store/operators';

export interface SelectionStateModel {
  lots: Lot[];
  text: string;
}

@Injectable({ providedIn: 'root' })
@StateRepository()
@State<SelectionStateModel>({
  name: 'selection',
  defaults: {
    lots: [],
    text: ''
  }
})
export class SelectionState extends NgxsDataRepository<SelectionStateModel> {
  constructor(private params: Params) {
    super();
  }
  // actions

  @DataAction({ insideZone: true })
  found(@Payload('SelectionState.found') lots: Lot[]): void {
    this.ctx.setState(patch({ lots }));
  }

  @DataAction({ insideZone: true })
  searchCancel(@Payload('SelectionState.searchCancel') text = undefined): void {
    this.ctx.setState(patch({ text }));
    setTimeout(() => this.found([]), 0);
  }

  @DataAction({ insideZone: true })
  searchFor(@Payload('SelectionState.searchFor') text: string): void {
    this.ctx.setState(patch({ text }));
    let lots;
    if (text) {
      const byAddress = this.isAddress(text);
      if (byAddress) lots = LOTS_BY_ADDRESS[byAddress];
      const byLotID = this.isLotID(text);
      if (byLotID) lots = LOTS_BY_ID[byLotID];
    }
    setTimeout(() => this.found(lots ? lots : []), 0);
  }

  // accessors

  @Computed() get lots(): Lot[] {
    return this.snapshot.lots;
  }

  @Computed() get text(): string {
    return this.snapshot.text;
  }

  // private methods

  private isAddress(text: string): string {
    if (!text.includes('-')) {
      const aliases = this.params.selection.aliases;
      let normalized = text.toUpperCase();
      // replace multiple spaces with one
      normalized = normalized.replace(/\s\s+/g, ' ');
      const regex = new RegExp(
        '\\b(' + Object.keys(aliases).join('|') + ')\\b',
        'gi'
      );
      // replace common aliases
      normalized = normalized.replace(regex, (matched) => aliases[matched]);
      console.log(normalized);
      return normalized;
    } else return null;
  }

  private isLotID(text: string): string {
    if (text.includes('-')) {
      let normalized = text.toUpperCase();
      // replace multiple spaces with none
      normalized = normalized.replace(/\s\s+/g, '');
      // split on - separator and strip leading zeros
      const parts = normalized.split('-');
      parts[0] = Number(parts[0]).toString();
      parts[1] = Number(parts[1]).toString();
      // if there's a third component and it's all zero, drop it
      if (parts.length > 2 && Number(parts[2]) === 0) parts.length = 2;
      // if there's a third component and it's longer than 2 characters,
      // just take the last two
      if (parts.length > 2 && parts[2].length > 2)
        parts[2] = parts[2].slice(-2);
      // there can't be any more than 3 parts
      if (parts.length > 3) parts.length = 3;
      return parts.join('-');
    } else return null;
  }
}
