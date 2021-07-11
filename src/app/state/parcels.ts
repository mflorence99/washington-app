import { LOTS } from './lots';

export interface Lot {
  address: string;
  area: number;
  // TODO: type these points
  centers: any[];
  id: string;
  updatedAt: string;
  usage: string;
  valueOfImprovement: number;
  valueOfLand: number;
  valueOfParcel: number;
  yearOfCAMA: number;
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
