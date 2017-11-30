import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { VerTodosComponent } from './ver-todos.component';
import { VerTodosRoutingModule } from './ver-todos-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    VerTodosRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [ VerTodosComponent ]
})
export class VerTodosModule { }
