import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { VerCursosComponent } from './ver-cursos.component';
import { VerCursosRoutingModule } from './ver-cursos-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    VerCursosRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [ VerCursosComponent ]
})
export class VerCursosModule { }
