// NOTE: a hack we can live ewith to accomodatedifferent Point types
export interface Point {
  lat?: number;
  lng?: number;
  lon?: number;
  x?: number;
  y?: number;
}

export interface Map {
  focus: Point;
  id: string;
  lots: string;
  src: string;
  title: string;
}

export const MAPS: Map[] = [
  {
    id: 'washington',
    focus: { x: 2240.0000000000578, y: 2810.7771425096607 },
    lots: 'assets/washington.svg',
    src: 'assets/washington.jpeg',
    title: 'Town of Washington'
  },

  {
    id: 'center',
    focus: { x: 3361.999999999468, y: 1052.3340544388147 },
    lots: 'assets/center.svg',
    src: 'assets/center.jpeg',
    title: 'Town Center'
  },

  {
    id: 'east',
    focus: { x: 2724.000000000088, y: 2532.347350507794 },
    lots: 'assets/east.svg',
    src: 'assets/east.jpeg',
    title: 'East Washington'
  },

  {
    id: 'highland',
    focus: { x: 1799.0000000003934, y: 1554.414864444374 },
    lots: 'assets/highland.svg',
    src: 'assets/highland.jpeg',
    title: 'Highland Lake'
  },

  {
    id: 'island',
    focus: { x: 1305.9999999995307, y: 1666.3772088709218 },
    lots: 'assets/island.svg',
    src: 'assets/island.jpeg',
    title: 'Island Pond'
  },

  {
    id: 'lae',
    focus: { x: 3192.9999999995966, y: 3572.7166959073684 },
    lots: 'assets/lae.svg',
    src: 'assets/lae.jpeg',
    title: 'Lake Ashuelot'
  }
];
