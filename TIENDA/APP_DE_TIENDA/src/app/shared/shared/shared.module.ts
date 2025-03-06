import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductoComponents } from '../components/producto/producto.component';
import { SelectComponent } from '../components/select/select.component';
import { AscdesComponent } from '../components/ascdes/ascdes.component';
import { ItemsComponent } from '../components/items/items.component';


const Components = [
  ProductoComponents,
  SelectComponent,
  AscdesComponent,
  ItemsComponent
]

const Modules = [
  CommonModule,
  IonicModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [... Components],
  imports: [
    ...Modules
  ],
  providers: [],
  exports: [... Modules, ... Components]
})
export class SharedModule { }
