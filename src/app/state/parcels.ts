import { LatLon } from '../services/geometry';
import { PARCELS } from './parcel-data';

import fuzzysort from 'fuzzysort';

export interface Lot {
  address?: string;
  area: number;
  areas: number[];
  boundaries: LatLon[][];
  building$: number;
  centers: LatLon[];
  cu$: number;
  elevations: number[];
  id: string;
  land$: number;
  lengths: number[][];
  minWidths: number[];
  neighborhood?: string;
  orientations: number[];
  owner?: string;
  perimeters: number[];
  taxed$: number;
  usage: string;
  use?: string;
  zone?: string;
}

export const DESC_BY_NEIGHBORHOOD = PARCELS.descByNeighborhood;

export const DESC_BY_USAGE = PARCELS.descByUsage;

export const DESC_BY_USE = PARCELS.descByUse;

export const LOTS = PARCELS.lots;

// 👇 we guarantee that lot IDs are unique
export const LOT_BY_ID: Record<string, Lot> = LOTS.reduce((acc, lot) => {
  acc[lot.id] = lot;
  return acc;
}, {});

export const LOTS_BY_ADDRESS: Record<string, Lot[]> = LOTS.reduce(
  (acc, lot) => {
    if (lot.address && /^[\d]+ /.test(lot.address)) {
      if (!acc[lot.address]) acc[lot.address] = [lot];
      else acc[lot.address].push(lot);
    }
    return acc;
  },
  {}
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
}, {});

export const OWNER_SEARCH_TARGETS = Object.keys(LOTS_BY_OWNER)
  .sort()
  .map((owner) => fuzzysort.prepare(owner));

export const SEARCH_TARGETS =
  ADDRESS_SEARCH_TARGETS.concat(OWNER_SEARCH_TARGETS);

export const USAGES = PARCELS.usages;

export const USES = PARCELS.uses;
