import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { VerMonitoriasComponent } from './ver-monitorias.component';
import { VerMonitoriasRoutingModule } from './ver-monitorias-routing.module';
import { EditarMonitoriaComponent } from './editar-monitoria.component';
import { EditarMonitoriaModule } from './editar-monitoria.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    VerMonitoriasRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule,
    EditarMonitoriaModule,
    FormsModule
  ],
  declarations: [ VerMonitoriasComponent ],
  entryComponents: [ EditarMonitoriaComponent ]
})
export class VerMonitoriasModule { }
