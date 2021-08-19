import { DestroyService } from '../services/destroy';
import { OverlayState } from '../state/overlay';

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { takeUntil } from 'rxjs/operators';

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
  overlayForm: FormGroup;
  selectedPicker: FormControl;

  constructor(
    private destroy$: DestroyService,
    private formBuilder: FormBuilder,
    private mc: ModalController,
    public overlay: OverlayState
  ) {
    const groups = OverlayState.schema().map(() =>
      this.formBuilder.group({
        attribute: '',
        enabled: '',
        fill: '',
        stroke: '',
        value: ''
      })
    );
    this.overlayForm = this.formBuilder.group({
      properties: this.formBuilder.array(groups)
    });
  }

  caption(ix: number): string {
    return OverlayState.schema()[ix].caption;
  }

  dismiss(): void {
    this.mc.dismiss();
  }

  ngOnInit(): void {
    this.populate();
    this.handleValueChanges$();
  }

  private handleValueChanges$(): void {
    this.overlayForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((overlayForm) => {
        this.overlay.update(overlayForm.properties);
      });
  }

  private populate(): void {
    const values = this.overlay.properties.map((property) => ({
      attribute: property.attribute,
      enabled: property.enabled,
      fill: property.fill,
      stroke: property.stroke,
      value: property.value
    }));
    this.overlayForm.patchValue({ properties: values });
  }
}
