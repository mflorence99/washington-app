import { LatLon } from '../services/geometry';
import { PARCELS } from './parcel-data';

import fuzzysort from 'fuzzysort';

export class Lot {
  abutters?: string[] = [];
  address = '';
  area = 0;
  areas: number[] = [];
  boundaries: LatLon[][] = [];
  building$ = 0;
  centers: LatLon[] = [];
  cu$ = 0;
  elevations: number[] = [];
  id = '';
  land$ = 0;
  lengths: number[][] = [];
  minWidths: number[] = [];
  neighborhood = '';
  orientations: number[] = [];
  owner = '';
  perimeters: number[] = [];
  taxed$ = 0;
  usage = '';
  use = '';
  zone = '';
}

export const DESC_BY_NEIGHBORHOOD: Record<string, string> =
  PARCELS.descByNeighborhood;

export const DESC_BY_USAGE: Record<string, string> = PARCELS.descByUsage;

export const DESC_BY_USE: Record<string, string> = PARCELS.descByUse;

export const LOTS: Lot[] = PARCELS.lots;

// 👇 we guarantee that lot IDs are unique
export const LOT_BY_ID: Record<string, Lot> = LOTS.reduce((acc, lot) => {
  acc[lot.id] = lot;
  return acc;
}, {} as Record<string, Lot>);

export const LOTS_BY_ADDRESS: Record<string, Lot[]> = LOTS.reduce(
  (acc, lot) => {
    if (lot.address) {
      if (!acc[lot.address]) acc[lot.address] = [lot];
      else acc[lot.address].push(lot);
    }
    return acc;
  },
  {} as Record<string, Lot[]>
);

export const ADDRESS_SEARCH_TARGETS = Object.keys(LOTS_BY_ADDRESS)
  .sort()
  .map((address) => fuzzysort.prepare(address));

export const LOTS_BY_OWNER: Record<string, Lot[]> = LOTS.reduce((acc, lot) => {
  if (lot.owner) {
    if (!acc[lot.owner]) acc[lot.owner] = [lot];
    else acc[lot.owner].push(lot);
  }
  return acc;
}, {} as Record<string, Lot[]>);

export const OWNER_SEARCH_TARGETS = Object.keys(LOTS_BY_OWNER)
  .sort()
  .map((owner) => fuzzysort.prepare(owner));

export const SEARCH_TARGETS =
  ADDRESS_SEARCH_TARGETS.concat(OWNER_SEARCH_TARGETS);

export const USAGES = PARCELS.usages;

export const USES = PARCELS.uses;
