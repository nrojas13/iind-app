import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AsignarPlazasComponent } from './asignar-plazas.component';
import { AsignarPlazasRoutingModule } from './asignar-plazas-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    AsignarPlazasRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [ AsignarPlazasComponent ]
})
export class AsignarPlazasModule { }
