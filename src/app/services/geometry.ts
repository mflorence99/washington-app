// @see https://wiki.openstreetmap.org/wiki/Mercator#JavaScript_.28or_ActionScript.29

import { Lot } from '../state/parcels';
import { LOTS_BY_ID } from '../state/parcels';
import { MAPS } from '../state/maps';
import { ModelState } from '../state/model';
import { Params } from './params';
import { ViewState } from '../state/view';

import { Injectable } from '@angular/core';

import centroid from 'polygon-centroid';
import pointInPoly from 'point-in-polygon-extended';

export interface LatLon {
  lat: number;
  lon: number;
}
export interface XY {
  x: number;
  y: number;
}

export interface Rectangle {
  bottom?: number;
  height?: number;
  left: number;
  right?: number;
  top: number;
  width?: number;
}

@Injectable({ providedIn: 'root' })
export class GeometryService {
  constructor(
    private model: ModelState,
    private params: Params,
    private view: ViewState
  ) {}

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
    } else console.log(`%cCan't select lots ${lots[0].id}`, 'color: indianred');
  }

  centerPointInViewport(xy: XY): void {
    const midPoint = this.xyCenterOfViewport();
    const max = this.maxTranslate();
    const min = this.minTranslate();
    const translate: [number, number] = [
      Math.max(max[0], Math.min(min[0], -(Number(xy.x) - midPoint.x))),
      Math.max(max[1], Math.min(min[1], -(Number(xy.y) - midPoint.y)))
    ];
    this.view.translate(translate);
  }

  event2xy(event: HammerInput): XY {
    const xy = event.center;
    const theMap = document.getElementById('theMap').parentElement;
    if (theMap.style.position === 'relative') {
      xy.x -= theMap.offsetLeft;
      xy.y -= theMap.offsetTop;
    }
    return xy;
  }

  // NOTE: this works because we scale the viewport on its center
  isPointInViewport(xy: XY, margin = 0): boolean {
    const center = this.xyCenterOfViewport();
    const translate = this.view.view.translate;
    const scale = this.view.view.scale;
    const xlate = {
      x: -translate[0],
      y: -translate[1]
    };
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
    return xy.x >= tl.x && xy.x < br.x && xy.y >= tl.y && xy.y < br.y;
  }

  lat2y(lat: number): number {
    return Math.log(Math.tan((lat / 90 + 1) * (Math.PI / 4))) * (180 / Math.PI);
  }

  latlon2xy(latlon: LatLon): XY {
    const x =
      ((this.lon2x(latlon.lon) - this.lon2x(this.model.map.bbox.left)) *
        this.model.tileContainer.width) /
      (this.lon2x(this.model.map.bbox.right) -
        this.lon2x(this.model.map.bbox.left));
    const y =
      ((this.lat2y(latlon.lat) - this.lat2y(this.model.map.bbox.top)) *
        this.model.tileContainer.height) /
      (this.lat2y(this.model.map.bbox.bottom) -
        this.lat2y(this.model.map.bbox.top));
    return { x, y };
  }

  latlonCenterOfLots(lots: Lot[]): LatLon {
    const centers = lots.flatMap((lot) => lot.centers);
    // return the center of the centers
    if (centers.length === 0) return null;
    else if (centers.length === 1) return centers[0];
    else {
      // NOTE: because centroid requires XY format
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

  minScale(): number {
    return this.params.geometry.scales[0];
  }

  minTranslate(): [number, number] {
    const center = this.xyCenterOfViewport();
    const margin = this.params.geometry.margin;
    const scale = this.view.view.scale;
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

  nearestLotID(xy: XY, lotIDs: string[]): string {
    let lastDistance = Number.MAX_VALUE;
    let nearestLotID = null;
    const lots = lotIDs.flatMap((lotID) => LOTS_BY_ID[lotID]);
    lots.forEach((lot) => {
      const center = this.xyCenterOfLots([lot]);
      const distance = Math.abs(Math.hypot(xy.x - center.x, xy.y - center.y));
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

  whichLotID(xy: XY): string {
    const center = this.xyCenterOfViewport();
    const origin = this.originOfViewport();
    const translate = this.view.view.translate;
    const scale = this.view.view.scale;
    const xlate = {
      x: -translate[0],
      y: -translate[1]
    };
    // cx            the distance of a point from the center
    // cx/scale      the actual distance in unscaled units
    // cx - cx/scale the delta from scaling
    // so ...
    // x += cx - cx/scale
    // y += cy - cy/scale
    const cx = center.x - xy.x;
    const dx = cx - cx / scale;
    const ox = origin.x / scale;
    xy.x += dx - ox + xlate.x;
    const cy = center.y - xy.y;
    const dy = cy - cy / scale;
    const oy = origin.y / scale;
    xy.y += dy - oy + xlate.y;
    // find the polygons that define the lots
    const polygons = Array.from(
      document.querySelectorAll<SVGGeometryElement>(
        'app-home .lots svg g polygon'
      )
    );
    // @see robust-point-in-polygon, point-in-polygon and point-in-polygon-extended on GitHub
    // we tried them all and pointInPoly.pointInPolyWindingNumber
    // was the most reliable -- looks like the ray cast algorithm
    // gets confused
    // NOTE: if trouble, replace "find" with "filter"
    const lot = polygons.find((polygon) => {
      const raw = polygon.getAttribute('points');
      const points = raw.split(' ').map((p) => p.split(','));
      return pointInPoly.pointInPolyWindingNumber([xy.x, xy.y], points);
    });
    if (lot) console.log(`%cFound lot: ${lot.id}`, 'color: gold');
    return lot?.id;
    // NOTE: resolve ambiguous matches by finding the nearest
    // const lotIDs = lots.map((p) => p.id);
    // console.log(
    //   `%cFound lots: ${lotIDs.join(', ')}`,
    //   lots.length > 1 ? 'color: indianred' : 'color: gold'
    // );
    // return lots.length > 1 ? this.nearestLotID(xy, lotIDs) : lots[0]?.id;
  }

  whichMapIDs(latlon: LatLon): string[] {
    return Object.keys(MAPS).filter((mapID) => {
      const map = MAPS[mapID];
      const inside =
        latlon.lon >= map.bbox.left &&
        latlon.lon < map.bbox.right &&
        latlon.lat >= map.bbox.bottom &&
        latlon.lat < map.bbox.top;
      return inside;
    });
  }

  x2lon(x: number): number {
    return x;
  }

  xy2latlon(xy: XY): LatLon {
    const lon =
      this.model.map.bbox.left +
      (xy.x / this.model.tileContainer.width) *
        (this.model.map.bbox.right - this.model.map.bbox.left);
    const lat =
      this.model.map.bbox.top +
      (xy.y / this.model.tileContainer.height) *
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
          // NOTE: centroid wants points in XY format
          return { x: Number(x), y: Number(y) };
        });
        acc.push(centroid(points));
      } else
        console.log(`%cCan't find polygon for ${lot.id}`, 'color: indianred');
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
}
