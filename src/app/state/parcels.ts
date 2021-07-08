import { LOTS } from './lots';

export interface Lot {
  address: string;
  id: string;
}

export const PARCELS_BY_ID: Record<string, Lot> = Object.keys(LOTS).reduce(
  (acc, id) => {
    acc[id] = { ...LOTS[id], id };
    return acc;
  },
  {}
);
