import { GeometryService } from '../services/geometry';
import { LatLon } from '../services/geometry';
import { Lot } from '../state/parcels';
import { LOTS } from '../state/parcels';
import { Map } from '../state/maps';
import { TileContainer } from '../state/tiles';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-lots',
  templateUrl: './lots.svg'
})
export class LotsComponent {
  @Input() map: Map;
  @Input() tileContainer: TileContainer;

  constructor(private geometry: GeometryService) {}

  lots(): Lot[] {
    return LOTS;
  }

  points(boundary: LatLon[]): string {
    const polygon = boundary.map((point: LatLon) =>
      this.geometry.latlon2xy(point)
    );
    // only emit if at least partially inside clip
    const inside = polygon.some(
      ({ x, y }) =>
        x >= 0 &&
        x < this.tileContainer.width &&
        y >= 0 &&
        y < this.tileContainer.height
    );
    return inside ? polygon.map(({ x, y }) => `${x},${y}`).join(' ') : null;
  }
}
