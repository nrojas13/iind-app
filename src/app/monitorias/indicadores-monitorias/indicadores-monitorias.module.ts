import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { IndicadoresMonitoriasComponent } from './indicadores-monitorias.component';
import { IndicadoresMonitoriasRoutingModule } from './indicadores-monitorias-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    IndicadoresMonitoriasRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [ IndicadoresMonitoriasComponent ]
})
export class IndicadoresMonitoriasModule { }
