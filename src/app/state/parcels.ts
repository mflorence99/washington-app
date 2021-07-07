import { lots } from './lots';

export interface Lot {
  address: string;
  id: string;
}

export const parcelsByID: Record<string, Lot> = Object.keys(lots).reduce(
  (acc, id) => {
    acc[id] = { ...lots[id], id };
    return acc;
  },
  {}
);
