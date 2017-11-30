import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { EditarMonitoriaComponent } from './editar-monitoria.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [ EditarMonitoriaComponent ]
})
export class EditarMonitoriaModule { }
