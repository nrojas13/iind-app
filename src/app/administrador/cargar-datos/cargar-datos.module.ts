import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { CargarDatosComponent } from './cargar-datos.component';
import { CargarDatosRoutingModule } from './cargar-datos-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CargarDatosRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [ CargarDatosComponent ]
})
export class CargarDatosModule { }
