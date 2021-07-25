import { DESC_BY_USAGE } from './lots';
import { DESC_BY_USE } from './lots';
import { LOTS } from './lots';
import { Point } from './maps';

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
  usage: keyof typeof DESC_BY_USAGE;
  use: keyof typeof DESC_BY_USE;
}

export const PARCELS_BY_ADDRESS: Record<string, Lot[]> = Object.keys(
  LOTS
).reduce((acc, id) => {
  const lot = { ...LOTS[id], id };
  if (lot.address && /^[\d]+ /.test(lot.address)) {
    if (!acc[lot.address]) acc[lot.address] = [lot];
    else acc[lot.address].push(lot);
  }
  return acc;
}, {});

export const PARCELS_BY_ID: Record<string, Lot[]> = Object.keys(LOTS).reduce(
  (acc, id) => {
    const lot = { ...LOTS[id], id };
    if (!acc[lot.id]) acc[lot.id] = [lot];
    else acc[lot.id].push(lot);
    return acc;
  },
  {}
);
