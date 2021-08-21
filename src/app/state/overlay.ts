import { Params } from '../services/params';

import { Computed } from '@ngxs-labs/data/decorators';
import { DataAction } from '@ngxs-labs/data/decorators';
import { Injectable } from '@angular/core';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Payload } from '@ngxs-labs/data/decorators';
import { State } from '@ngxs/store';
import { StateRepository } from '@ngxs-labs/data/decorators';

export interface OverlayProperties {
  attribute: string;
  enabled: boolean;
  fill: string;
  stroke: string;
  value: string;
}

export interface OverlaySchema {
  attribute: string;
  caption: string;
  value: string;
}

export type OverlayStateModel = OverlayProperties[];

@Injectable({ providedIn: 'root' })
@StateRepository()
@State<OverlayStateModel>({
  name: 'overlay',
  defaults: OverlayState.defaultState()
})
export class OverlayState extends NgxsDataRepository<OverlayStateModel> {
  constructor(private params: Params) {
    super();
  }

  static defaultState(): OverlayStateModel {
    return OverlayState.schema().map((schema) => ({
      attribute: schema.attribute,
      enabled: false,
      fill: '',
      stroke: '',
      value: schema.value
    }));
  }

  // 👇 acceptable hack: must match schema below
  static quantizeArea(area: number): string {
    if (area <= 0.25) return 'quarter';
    if (area <= 0.5) return 'half';
    if (area <= 1) return 'one';
    if (area <= 2) return 'two';
    if (area <= 4) return 'four';
    return '';
  }

  // 👇 acceptable hack: must match schema below
  static quantizeWidth(width: number): string {
    if (width <= 60) return 'sixty';
    return '';
  }

  static schema(): OverlaySchema[] {
    return [
      { attribute: 'neighborhood', value: 'W', caption: 'Vacant (Highland)' },
      { attribute: 'neighborhood', value: 'U', caption: 'Vacant (LAE)' },
      { attribute: 'neighborhood', value: 'V', caption: 'Vacant (Other)' },
      {
        attribute: 'area',
        value: 'quarter',
        caption: 'Lots \u2264 \u00BC acre'
      },
      { attribute: 'area', value: 'half', caption: 'Lots \u2264 \u00BD acre' },
      { attribute: 'area', value: 'one', caption: 'Lots \u2264 1 acre' },
      { attribute: 'area', value: 'two', caption: 'Lots \u2264 2 acres' },
      { attribute: 'area', value: 'four', caption: 'Lots \u2264 4 acres' },
      { attribute: 'width', value: 'sixty', caption: 'Lots \u2264 60ft wide' }
    ];
  }

  // mutators

  @DataAction({ insideZone: true })
  update(
    @Payload('OverlayState.update')
    properties: OverlayProperties[]
  ): void {
    this.ctx.setState(properties);
  }

  // accessors

  @Computed() get isSet(): boolean {
    return this.properties.some(
      (property) => property.enabled && (property.fill || property.stroke)
    );
  }

  @Computed() get properties(): OverlayProperties[] {
    return this.snapshot;
  }
}
