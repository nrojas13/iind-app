import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { IndicadoresAdministradorComponent } from './indicadores-administrador.component';
import { IndicadoresAdministradorRoutingModule } from './indicadores-administrador-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    IndicadoresAdministradorRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [ IndicadoresAdministradorComponent ]
})
export class IndicadoresAdministradorModule { }
