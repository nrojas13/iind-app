import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { VerNotificacionesComponent } from './ver-notificaciones.component';
import { VerNotificacionesRoutingModule } from './ver-notificaciones-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    VerNotificacionesRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [ VerNotificacionesComponent ]
})
export class VerNotificacionesModule { }
