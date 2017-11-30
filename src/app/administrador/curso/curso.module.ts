import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { CursoComponent } from './curso.component';
import { CursoRoutingModule } from './curso-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CursoRoutingModule,
    ChartsModule,
    FormsModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [ CursoComponent ]
})
export class CursoModule { }
