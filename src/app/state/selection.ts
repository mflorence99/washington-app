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
    let fuzzies;
    let lots;
    let searchFor = text;
    if (searchFor) {
      searchFor = text.toUpperCase();
      // 👇 try by lotID first
      const lotID = this.isLotID(searchFor);
      if (lotID) {
        const lot = LOT_BY_ID[lotID];
        lots = lot ? [lot] : null;
      } else lots = LOTS_BY_ADDRESS[searchFor] ?? LOTS_BY_OWNER[searchFor];
      // 👇 if no match and at least N characters, give the user some choices
      const minLength = this.params.selection.fuzzySearchMinLength;
      if (!lotID && !lots && searchFor.length >= minLength) {
        fuzzies = fuzzysort
          .go(
            searchFor,
            SEARCH_TARGETS,
            this.params.selection.fuzzySearchOptions
          )
          .map((result) => result.target);
      }
    }
    this.ctx.setState(
      patch({ fuzzies: fuzzies ?? [], lots: lots ?? [], text: searchFor })
    );
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

  private isLotID(searchFor: string): string {
    // 👀 https://stackoverflow.com/questions/8292965/regular-expression-for-number-and-dash
    if (/^(\d+-?)+\d+$/.test(searchFor)) {
      // replace multiple spaces with none
      const normalized = searchFor.replace(/\s\s+/g, '');
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
