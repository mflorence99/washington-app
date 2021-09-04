import { DestroyService } from '../services/destroy';
import { OverlayState } from '../state/overlay';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HostBinding } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { ViewEncapsulation } from '@angular/core';

import { takeUntil } from 'rxjs/operators';

import Debounce from 'debounce-decorator';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // 👇 so that we can manipulate the actual stylesheet in code
  encapsulation: ViewEncapsulation.None,
  providers: [DestroyService],
  selector: 'app-overlay',
  styleUrls: ['./overlay.scss'],
  templateUrl: './overlay.html'
})
export class OverlayComponent implements OnInit {
  @HostBinding('class') cssClass: 'landscape' | 'portrait' = 'landscape';

  overlayForm: FormGroup;
  selectedPicker: FormControl;

  constructor(
    private destroy$: DestroyService,
    private formBuilder: FormBuilder,
    private mc: ModalController,
    public overlay: OverlayState
  ) {
    this.#makeOverlayForm();
  }

  #handleValueChanges$(): void {
    this.overlayForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((overlayForm) => {
        this.overlay.update(overlayForm.properties);
      });
  }

  #makeOverlayForm(): void {
    const groups = OverlayState.schema().map((schema) =>
      this.formBuilder.group({
        attribute: schema.attribute,
        enabled: false,
        fill: '',
        stroke: '',
        value: schema.value
      })
    );
    this.overlayForm = this.formBuilder.group({
      properties: this.formBuilder.array(groups)
    });
    // 👇 select the first group with a value
    const ix = this.overlay.properties.findIndex(
      (property) => property.fill || property.stroke
    );
    if (ix !== -1) {
      const nm = this.overlay.properties[ix].fill ? 'fill' : 'stroke';
      this.selectedPicker = groups[ix].get(nm) as FormControl;
    }
  }

  #populate(): void {
    const values = this.overlay.properties.map((property) => ({
      attribute: property.attribute,
      enabled: property.enabled,
      fill: property.fill,
      stroke: property.stroke,
      value: property.value
    }));
    this.overlayForm.patchValue({ properties: values });
  }

  caption(ix: number): string {
    return OverlayState.schema()[ix].caption;
  }

  @Debounce(250) colorPickerChange(color: string): void {
    this.selectedPicker?.setValue(color);
  }

  dismiss(): void {
    this.mc.dismiss();
  }

  ngOnInit(): void {
    this.#populate();
    this.#handleValueChanges$();
  }

  resize(event: ResizedEvent): void {
    if (event.newWidth >= event.newHeight) this.cssClass = 'landscape';
    else if (event.newWidth < event.newHeight) this.cssClass = 'portrait';
  }
}
