// NOTE: a hack we can live ewith to accomodatedifferent Point types
export interface Point {
  lat?: number;
  lng?: number;
  lon?: number;
  x?: number;
  y?: number;
}

export interface Map {
  cxScale: number;
  focus: Point;
  ftScale: number;
  id: string;
  title: string;
}

export const MAPS: Map[] = [
  {
    id: 'washington',
    cxScale: 87,
    ftScale: 1000,
    focus: { x: 2240.0000000000578, y: 2810.7771425096607 },
    title: 'Washington'
  },

  {
    id: 'center',
    cxScale: 70,
    ftScale: 200,
    focus: { x: 3361.999999999468, y: 1052.3340544388147 },
    title: 'Town Center'
  },

  {
    id: 'east',
    cxScale: 70,
    ftScale: 200,
    focus: { x: 2724.000000000088, y: 2532.347350507794 },
    title: 'East Washington'
  },

  {
    id: 'highland',
    cxScale: 70,
    ftScale: 200,
    focus: { x: 1799.0000000003934, y: 1554.414864444374 },
    title: 'Highland Lake'
  },

  {
    id: 'island',
    cxScale: 70,
    ftScale: 200,
    focus: { x: 1305.9999999995307, y: 1666.3772088709218 },
    title: 'Island Pond'
  },

  {
    id: 'lae',
    cxScale: 70,
    ftScale: 200,
    focus: { x: 3192.9999999995966, y: 3572.7166959073684 },
    title: 'Lake Ashuelot'
  }
];
