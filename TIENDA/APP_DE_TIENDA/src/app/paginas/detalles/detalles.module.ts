import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { DetallesPageRoutingModule } from './detalles-routing.module';

import { DetallesPage } from './detalles.page';

@NgModule({
  imports: [
    DetallesPageRoutingModule,
    SharedModule
  ],
  declarations: [DetallesPage]
})
export class DetallesPageModule {}
