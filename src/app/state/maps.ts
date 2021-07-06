export interface Map {
  id: string;
  src: string;
  title: string;
}

export const MAPS: Map[] = [
  {
    id: 'washington',
    src: 'assets/washington.jpeg',
    title: 'Town of Washington'
  },

  {
    id: 'center',
    src: 'assets/center.jpeg',
    title: 'Town Center'
  },

  {
    id: 'east',
    src: 'assets/east.jpeg',
    title: 'East Washington'
  },

  {
    id: 'highland',
    src: 'assets/highland.jpeg',
    title: 'Highland Lake'
  },

  {
    id: 'island',
    src: 'assets/island.jpeg',
    title: 'Island Pond'
  },

  {
    id: 'lae',
    src: 'assets/lae.jpeg',
    title: 'Lake Ashuelot'
  }
];
