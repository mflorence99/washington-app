import { Lot } from './parcels';
import { LOT_BY_ID } from './parcels';
import { LOTS_BY_ADDRESS } from './parcels';
import { LOTS_BY_OWNER } from './parcels';
import { Params } from '../services/params';
import { SEARCH_TARGETS } from './parcels';

import { Computed } from '@ngxs-labs/data/decorators';
import { DataAction } from '@ngxs-labs/data/decorators';
import { Injectable } from '@angular/core';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Payload } from '@ngxs-labs/data/decorators';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';

import { patch } from '@ngxs/store/operators';

import fuzzysort from 'fuzzysort';

export interface SelectionStateModel {
  fuzzies: string[];
  lots: Lot[];
  text: string;
}

@Injectable({ providedIn: 'root' })
@StateRepository()
@State<SelectionStateModel>({
  name: 'selection',
  defaults: {
    fuzzies: [],
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
  searchFor(@Payload('SelectionState.searchFor') text: string): void {
    this.ctx.setState(patch({ text }));
    let fuzzies;
    let lots;
    if (text) {
      // look for an exact match on what was typed
      const byAddress = this.isAddress(text);
      if (byAddress) lots = LOTS_BY_ADDRESS[byAddress];
      const byLotID = this.isLotID(text);
      if (byLotID) {
        const lot = LOT_BY_ID[byLotID];
        lots = lot ? [lot] : null;
      }
      const byOwner = this.isOwner(text);
      if (byOwner) lots = LOTS_BY_OWNER[byOwner];
      // if no match and at least N characters, give the user some choices
      if (!lots && text.length >= this.params.selection.fuzzySearchMinLength) {
        if (byAddress || byOwner) {
          fuzzies = fuzzysort
            .go(text, SEARCH_TARGETS, this.params.selection.fuzzySearchOptions)
            .map((result) => result.target);
        }
      }
    }
    this.ctx.setState(patch({ fuzzies: fuzzies ?? [], lots: lots ?? [] }));
  }

  @DataAction({ insideZone: true })
  select(@Payload('SelectionState.select') lots: Lot[]): void {
    this.ctx.setState({ fuzzies: [], lots, text: '' });
  }

  // accessors

  @Computed() get fuzzies(): string[] {
    return this.snapshot.fuzzies;
  }

  @Computed() get lots(): Lot[] {
    return this.snapshot.lots;
  }

  @Computed() get text(): string {
    return this.snapshot.text;
  }

  // private methods

  private isAddress(text: string): string {
    if (!text.includes('-') && /^[\d]+ /.test(text)) {
      const normalized = text.toUpperCase();
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

  private isOwner(text: string): string {
    if (!text.includes('-') && /^[A-Z]/i.test(text)) {
      const normalized = text.toUpperCase();
      return normalized;
    } else return null;
  }
}
