// 👀  https://wiki.openstreetmap.org/wiki/Mercator#JavaScript_.28or_ActionScript.29

import { Lot } from '../state/parcels';
import { LOT_BY_ID } from '../state/parcels';
import { MAPS } from '../state/maps';
import { ModelState } from '../state/model';
import { Params } from './params';
import { ViewState } from '../state/view';

import { Injectable } from '@angular/core';
import { Memoize } from 'typescript-memoize';

import centroid from 'polygon-centroid';
import pointInPoly from 'point-in-polygon-extended';

export interface LatLon {
  lat: number;
  lon: number;
}

export interface Rectangle {
  bottom?: number;
  height?: number;
  left: number;
  right?: number;
  top: number;
  width?: number;
}

export interface XY {
  x: number;
  y: number;
}

@Injectable({ providedIn: 'root' })
export class GeometryService {
  constructor(
    private model: ModelState,
    private params: Params,
    private view: ViewState
  ) {}

  acres2sqft(acres: number): number {
    return acres * 43560;
  }

  // 👀  https://stackoverflow.com/questions/46590154/calculate-bearing-between-2-points-with-javascript
  bearing(from: LatLon, to: LatLon): number {
    const p = {
      lat: this.degrees2radians(from.lat),
      lon: this.degrees2radians(from.lon)
    };
    const q = {
      lat: this.degrees2radians(to.lat),
      lon: this.degrees2radians(to.lon)
    };
    const y = Math.sin(q.lon - p.lon) * Math.cos(q.lat);
    const x =
      Math.cos(p.lat) * Math.sin(q.lat) -
      Math.sin(p.lat) * Math.cos(q.lat) * Math.cos(q.lon - p.lon);
    const bearing = this.radians2degrees(Math.atan2(y, x));
    return (bearing + 360) % 360;
  }

  // 👀 https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
  bezier(
    latlon: LatLon,
    ix: number,
    latlons: LatLon[],
    latlon2xy = this.latlon2xy.bind(this)
  ): string {
    const ok = (p): boolean => p < latlons.length - 1 && p >= 0;
    const current = latlon2xy(latlon);
    const next = ok(ix + 1) ? latlon2xy(latlons[ix + 1]) : undefined;
    const previous = ok(ix - 1) ? latlon2xy(latlons[ix - 1]) : undefined;
    const pprevious = ok(ix - 2) ? latlon2xy(latlons[ix - 2]) : undefined;
    const start = this.bezierControlPoint(previous, pprevious, current);
    const end = this.bezierControlPoint(current, previous, next, true);
    return `C ${start.x},${start.y} ${end.x},${end.y} ${current.x},${current.y}`;
  }

  centerLotsInViewport(lots: Lot[]): void {
    const center = this.xyCenterOfLots(lots);
    if (center) {
      const midPoint = this.xyCenterOfViewport();
      const max = this.maxTranslate();
      const min = this.minTranslate();
      const translate: [number, number] = [
        Math.max(max[0], Math.min(min[0], -(Number(center.x) - midPoint.x))),
        Math.max(max[1], Math.min(min[1], -(Number(center.y) - midPoint.y)))
      ];
      this.view.translate(translate);
    }
  }

  centerXYInViewport({ x, y }): void {
    const midPoint = this.xyCenterOfViewport();
    const max = this.maxTranslate();
    const min = this.minTranslate();
    const translate: [number, number] = [
      Math.max(max[0], Math.min(min[0], -(x - midPoint.x))),
      Math.max(max[1], Math.min(min[1], -(y - midPoint.y)))
    ];
    this.view.translate(translate);
  }

  // 👀 https://stackoverflow.com/questions/16282330/find-centerpoint-of-polygon-in-javascript
  centroid(points: LatLon[]): LatLon {
    const lons = points.map((point) => point.lon);
    const lats = points.map((point) => point.lat);
    const cx = (Math.min(...lons) + Math.max(...lons)) / 2;
    const cy = (Math.min(...lats) + Math.max(...lats)) / 2;
    return { lat: cy, lon: cx };
  }

  degrees2radians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  // 👀  https://www.geodatasource.com/developers/javascript
  distance(from: LatLon, to: LatLon): number {
    const Θ1 = (Math.PI * from.lat) / 180;
    const Θ2 = (Math.PI * to.lat) / 180;
    const Θ = (Math.PI * (from.lon - to.lon)) / 180;
    let dist =
      Math.sin(Θ1) * Math.sin(Θ2) + Math.cos(Θ1) * Math.cos(Θ2) * Math.cos(Θ);
    dist = Math.min(dist, 1);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515 * 5280;
    return Math.abs(dist);
  }

  event2xy(event: HammerInput): XY {
    let { x, y } = event.center;
    const theMap = document.getElementById('theMap').parentElement;
    // TODO: 👇 we only know this emprically from testing with Firefox
    if (theMap.style.position === 'relative') {
      x -= theMap.offsetLeft;
      y -= theMap.offsetTop;
    }
    return { x, y };
  }

  isXYInViewport({ x, y }, margin = 0): boolean {
    const center = this.xyCenterOfViewport();
    const translate = this.view.view.translate;
    const scale = this.view.view.scale;
    const xlate = {
      x: -translate[0],
      y: -translate[1]
    };
    // 👇 this works because we scale the viewport on its center
    // tl            top left corner of viewport
    // cx            the distance of edge from the center
    // cx/scale      the actual distance in unscaled units
    // cx - cx/scale the delta from scaling
    // so ...
    // tl.x = cx - cx/scale
    // tl.y = cy - cy/scale
    const tl = this.event2xy({ center: { x: 0, y: 0 } } as HammerInput);
    const cx = center.x;
    const dx = cx - cx / scale;
    const ox = (tl.x - margin) / scale;
    tl.x = dx - ox + xlate.x;
    const cy = center.y;
    const dy = cy - cy / scale;
    const oy = (tl.y - margin) / scale;
    tl.y = dy - oy + xlate.y;
    // w             the width of the viewport
    // w/scale       the actual width in unscaled units
    // so ...
    // br.x = tl.x + w/scale
    // br.y = tl.y + h/scale
    const w = ((center.x - margin) * 2) / scale;
    const h = ((center.y - margin) * 2) / scale;
    const br = { x: tl.x + w, y: tl.y + h };
    return x >= tl.x && x < br.x && y >= tl.y && y < br.y;
  }

  lat2y(lat: number): number {
    // 👇 we should do this, but the simplification is MUCH faster
    // and accurate enough over the area we cover
    // Math.log(Math.tan((lat / 90 + 1) * (Math.PI / 4))) * (180 / Math.PI);
    return lat;
  }

  latlon2xy({ lat, lon }): XY {
    const bbox = this.bbox2xy(this.model.mapID);
    const x =
      ((this.lon2x(lon) - bbox.left) * this.model.tileContainer.width) /
      (bbox.right - bbox.left);
    const y =
      ((this.lat2y(lat) - bbox.top) * this.model.tileContainer.height) /
      (bbox.bottom - bbox.top);
    return { x, y };
  }

  latlonCenterOfLots(lots: Lot[]): LatLon {
    const centers = lots.flatMap((lot) => lot.centers);
    // return the center of the centers
    if (centers.length === 0) return null;
    else if (centers.length === 1) return centers[0];
    else {
      // 👇 because centroid requires XY format
      const center = centroid(
        centers.map((c: LatLon): XY => ({ x: c.lon, y: c.lat }))
      );
      return { lat: center.y, lon: center.x };
    }
  }

  lon2x(lon: number): number {
    return lon;
  }

  maxScale(): number {
    const scales = this.params.geometry.scales;
    return scales[scales.length - 1];
  }

  maxTranslate(): [number, number] {
    const center = this.xyCenterOfViewport();
    const margin = this.params.geometry.margin;
    const scale = this.view.view.scale;
    // 👇 this works because we scale the viewport on its center
    // [-w, -h]      nominal minimum translate
    // cx            the distance of edge from the center
    // cx/scale      the actual distance in unscaled units
    // cx - cx/scale the delta from scaling
    // so ...
    // max(x) = cx - cx/scale
    // max(y) = cy - cy/scale
    const tl = this.event2xy({ center: { x: 0, y: 0 } } as HammerInput);
    const br = {
      x: -this.model.tileContainer.width,
      y: -this.model.tileContainer.height
    };
    const cx = center.x;
    const dx = cx - cx / scale;
    const ox = tl.x / scale;
    const w = ((center.x + margin / 2) * 2) / scale;
    br.x += ox + dx + w;
    const cy = center.y;
    const dy = cy - cy / scale;
    const oy = tl.y / scale;
    const h = ((center.y + margin / 2) * 2) / scale;
    br.y += oy + dy + h;
    return [br.x, br.y];
  }

  meters2feet(meters: number): number {
    return meters * 3.28084;
  }

  minScale(): number {
    return this.params.geometry.scales[0];
  }

  minTranslate(): [number, number] {
    const center = this.xyCenterOfViewport();
    const margin = this.params.geometry.margin;
    const scale = this.view.view.scale;
    // 👇 this works because we scale the viewport on its center
    // [0, 0]        nominal minimum translate
    // cx            the distance of edge from the center
    // cx/scale      the actual distance in unscaled units
    // cx - cx/scale the delta from scaling
    // so ...
    // min(x) = cx - cx/scale
    // min(y) = cy - cy/scale
    const tl = this.event2xy({ center: { x: 0, y: 0 } } as HammerInput);
    const cx = center.x;
    const dx = cx - cx / scale;
    const ox = (tl.x - margin) / scale;
    tl.x = ox + dx;
    const cy = center.y;
    const dy = cy - cy / scale;
    const oy = (tl.y - margin) / scale;
    tl.y = oy + dy;
    return [tl.x, tl.y];
  }

  nearestLotID({ x, y }, lotIDs: string[]): string {
    let lastDistance = Number.MAX_VALUE;
    let nearestLotID = null;
    const lots = lotIDs.map((lotID) => LOT_BY_ID[lotID]);
    lots.forEach((lot) => {
      const center = this.xyCenterOfLots([lot]);
      const distance = Math.abs(Math.hypot(x - center.x, y - center.y));
      console.log(`Distance to ${lot.id} is ${distance}`);
      if (distance < lastDistance) {
        lastDistance = distance;
        nearestLotID = lot.id;
      }
    });
    return nearestLotID;
  }

  originOfViewport(): XY {
    const theMap = document.getElementById('theMap');
    if (theMap) {
      return {
        x: theMap.parentElement.offsetLeft,
        y: theMap.parentElement.offsetTop
      };
    } else return { x: 0, y: 0 };
  }

  radians2degrees(radians: number): number {
    return (radians * 180) / Math.PI;
  }

  whichLotID({ x, y }): string {
    const center = this.xyCenterOfViewport();
    const origin = this.originOfViewport();
    const translate = this.view.view.translate;
    const scale = this.view.view.scale;
    const xlate = {
      x: -translate[0],
      y: -translate[1]
    };
    // 👇 this works because we scale the viewport on its center
    // cx            the distance of a point from the center
    // cx/scale      the actual distance in unscaled units
    // cx - cx/scale the delta from scaling
    // so ...
    // x += cx - cx/scale
    // y += cy - cy/scale
    const cx = center.x - x;
    const dx = cx - cx / scale;
    const ox = origin.x / scale;
    x += dx - ox + xlate.x;
    const cy = center.y - y;
    const dy = cy - cy / scale;
    const oy = origin.y / scale;
    y += dy - oy + xlate.y;
    // find the polygons that define the lots
    const polygons = Array.from(
      document.querySelectorAll<SVGGeometryElement>(
        'app-home .lots svg g polygon'
      )
    );
    // 👀 robust-point-in-polygon, point-in-polygon and point-in-polygon-extended on GitHub
    // we tried them all and pointInPoly.pointInPolyWindingNumber
    // was the most reliable -- looks like the ray cast algorithm
    // gets confused
    // 👇 if trouble, replace "find" with "filter"
    const lot = polygons.find((polygon) => {
      const raw = polygon.getAttribute('points');
      const points = raw.split(' ').map((p) => p.split(','));
      return pointInPoly.pointInPolyWindingNumber([x, y], points);
    });
    if (lot) console.log(`%cFound lot: ${lot.id}`, 'color: gold');
    return lot?.id;
    // 👇 resolve ambiguous matches by finding the nearest
    // const lotIDs = lots.map((p) => p.id);
    // console.log(
    //   `%cFound lots: ${lotIDs.join(', ')}`,
    //   lots.length > 1 ? 'color: indianred' : 'color: gold'
    // );
    // return lots.length > 1 ? this.nearestLotID(xy, lotIDs) : lots[0]?.id;
  }

  whichMapIDs({ lat, lon }): string[] {
    return Object.keys(MAPS).filter((mapID) => {
      const map = MAPS[mapID];
      const inside =
        lon >= map.bbox.left &&
        lon < map.bbox.right &&
        lat >= map.bbox.bottom &&
        lat < map.bbox.top;
      return inside;
    });
  }

  x2lon(x: number): number {
    return x;
  }

  xy2latlon({ x, y }): LatLon {
    const lon =
      this.model.map.bbox.left +
      (x / this.model.tileContainer.width) *
        (this.model.map.bbox.right - this.model.map.bbox.left);
    const lat =
      this.model.map.bbox.top +
      (y / this.model.tileContainer.height) *
        (this.model.map.bbox.bottom - this.model.map.bbox.top);
    return { lat, lon };
  }

  xyCenterOfLots(lots: Lot[]): XY {
    // find the center of each lot
    const centers = lots.reduce((acc, lot) => {
      const polygon = document.getElementById(lot.id);
      if (polygon) {
        const raw = polygon.getAttribute('points');
        const points = raw.split(' ').map((point) => {
          const [x, y] = point.split(',');
          // 👇 centroid wants points in XY format
          return { x: Number(x), y: Number(y) };
        });
        acc.push(centroid(points));
      }
      return acc;
    }, []);
    // return the center of the centers
    if (centers.length === 0) return null;
    else if (centers.length === 1) return centers[0];
    else return centroid(centers);
  }

  xyCenterOfViewport(): XY {
    const theMap = document.getElementById('theMap');
    if (
      theMap &&
      theMap.parentElement.offsetWidth &&
      theMap.parentElement.offsetHeight
    ) {
      return {
        x: theMap.parentElement.offsetWidth / 2,
        y: theMap.parentElement.offsetHeight / 2
      };
    } else return { x: 0, y: 0 };
  }

  y2lat(y: number): number {
    return (Math.atan(Math.exp(y / (180 / Math.PI))) / (Math.PI / 4) - 1) * 90;
  }

  // 👇 mapID is passed as a parameters simply to defeat memo cache
  @Memoize()
  private bbox2xy(_mapID: string): Rectangle {
    return {
      bottom: this.lat2y(this.model.map.bbox.bottom),
      left: this.lon2x(this.model.map.bbox.left),
      right: this.lon2x(this.model.map.bbox.right),
      top: this.lat2y(this.model.map.bbox.top)
    };
  }

  // 👀 https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74

  private bezierControlPoint(
    current: XY,
    previous: XY,
    next: XY,
    reverse = false
  ): XY {
    previous = previous ?? current;
    next = next ?? current;
    // properties of opposed line
    const lineProps = this.bezierLineProps(previous, next);
    // if is end-control-point, add PI to the angle to go backward
    const angle = lineProps.angle + (reverse ? Math.PI : 0);
    const length = lineProps.length * this.params.geometry.bezierSmoothing;
    // control point position is relative to the current point
    const x = current.x + Math.cos(angle) * length;
    const y = current.y + Math.sin(angle) * length;
    return { x, y };
  }

  private bezierLineProps(p: XY, q: XY): { angle: number; length: number } {
    const lx = q.x - p.x;
    const ly = q.y - p.y;
    return {
      angle: Math.atan2(ly, lx),
      length: Math.sqrt(Math.pow(lx, 2) + Math.pow(ly, 2))
    };
  }
}
