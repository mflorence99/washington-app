import { HomePage } from './page';
import { HomeRouting } from './routing';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomePage],

  imports: [CommonModule, FormsModule, IonicModule, HomeRouting]
})
export class HomeModule {}
