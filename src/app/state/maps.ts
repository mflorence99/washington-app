export interface Map {
  id: string;
  lots: string;
  src: string;
  title: string;
}

export const MAPS: Map[] = [
  {
    id: 'washington',
    lots: 'assets/washington.svg',
    src: 'assets/washington.jpeg',
    title: 'Town of Washington'
  },

  {
    id: 'center',
    lots: 'assets/center.svg',
    src: 'assets/center.jpeg',
    title: 'Town Center'
  },

  {
    id: 'east',
    lots: 'assets/east.svg',
    src: 'assets/east.jpeg',
    title: 'East Washington'
  },

  {
    id: 'highland',
    lots: 'assets/highland.svg',
    src: 'assets/highland.jpeg',
    title: 'Highland Lake'
  },

  {
    id: 'island',
    lots: 'assets/island.svg',
    src: 'assets/island.jpeg',
    title: 'Island Pond'
  },

  {
    id: 'lae',
    lots: 'assets/lae.svg',
    src: 'assets/lae.jpeg',
    title: 'Lake Ashuelot'
  }
];
