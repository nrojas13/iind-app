import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { VerNoticiasComponent } from './ver-noticias.component';
import { VerNoticiasRoutingModule } from './ver-noticias-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    VerNoticiasRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [ VerNoticiasComponent ]
})
export class VerNoticiasModule { }
