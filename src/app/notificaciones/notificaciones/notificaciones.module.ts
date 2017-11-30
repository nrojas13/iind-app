import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { NotificacionesComponent } from './notificaciones.component';
import { NotificacionesRoutingModule } from './notificaciones-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    NotificacionesRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [ NotificacionesComponent ]
})
export class NotificacionesModule { }
