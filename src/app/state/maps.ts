import { Point } from '../services/geometry';
import { Rectangle } from '../services/geometry';

export interface Map {
  bbox: Rectangle;
  cxScale: number;
  focus: Point;
  ftScale: number;
  title: string;
}

export type Maps = Record<string, Map>;

export const MAPS: Maps = {
  center: {
    bbox: {
      bottom: 43.155962840085444,
      left: -72.13330520983168,
      right: -72.07375630990587,
      top: 43.18490951655938
    },
    cxScale: 70,
    ftScale: 200,
    focus: { lat: 43.17667538633558, lon: -72.09721948987017 },
    title: 'Town Center'
  },

  east: {
    bbox: {
      bottom: 43.18152468166675,
      left: -72.04833282823988,
      right: -72.00861692740452,
      top: 43.21047135814069
    },
    cxScale: 70,
    ftScale: 200,
    focus: { lat: 43.190664952045644, lon: -72.0190973722202 },
    title: 'East Washington'
  },

  highland: {
    bbox: {
      bottom: 43.12842988954499,
      left: -72.10798515673109,
      right: -72.04846309554708,
      top: 43.157376566018925
    },
    cxScale: 70,
    ftScale: 200,
    focus: { lat: 43.14520867564755, lon: -72.08866837438943 },
    title: 'Highland Lake'
  },

  island: {
    bbox: {
      bottom: 43.15949832123439,
      left: -72.07845939989515,
      right: -72.0387578338856,
      top: 43.188444997708324
    },
    cxScale: 70,
    ftScale: 200,
    focus: { lat: 43.17540728708604, lon: -72.06443744223708 },
    title: 'Island Pond'
  },

  lae: {
    bbox: {
      bottom: 43.133859450309394,
      left: -72.17305139671191,
      right: -72.13335709107513,
      top: 43.17727946502029
    },
    cxScale: 70,
    ftScale: 200,
    focus: { lat: 43.15492931705047, lon: -72.15021624183113 },
    title: 'Lake Ashuelot'
  },

  washington: {
    bbox: {
      bottom: 43.11939057768859,
      left: -72.19278587694593,
      right: -71.99452847229723,
      top: 43.264129324250774
    },
    cxScale: 87,
    ftScale: 1000,
    focus: { lat: 43.1762428946279, lon: -72.09665550585218 },
    title: 'Full Map'
  }
};
