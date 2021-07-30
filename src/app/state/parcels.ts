import { Point } from './maps';

import PARCELS from '../../assets/parcels.json';

export interface Lot {
  address: string;
  area: number;
  building$: number;
  centers: Point[];
  cu$: number;
  id: string;
  land$: number;
  owner: string;
  taxed$: number;
  usage: string;
  use: string;
}

export const DESC_BY_USAGE = PARCELS.descByUsage;

export const DESC_BY_USE = PARCELS.descByUse;

export const LOTS_BY_ADDRESS: Record<string, Lot[]> = PARCELS.lots.reduce(
  (acc, lot) => {
    if (lot.address && /^[\d]+ /.test(lot.address)) {
      if (!acc[lot.address]) acc[lot.address] = [lot];
      else acc[lot.address].push(lot);
    }
    return acc;
  },
  {}
);

export const LOTS_BY_ID: Record<string, Lot[]> = PARCELS.lots.reduce(
  (acc, lot) => {
    if (!acc[lot.id]) acc[lot.id] = [lot];
    else acc[lot.id].push(lot);
    return acc;
  },
  {}
);

export const USAGES = PARCELS.usages;

export const USES = PARCELS.uses;
