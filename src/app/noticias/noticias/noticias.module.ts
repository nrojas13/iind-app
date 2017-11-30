import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { NoticiasComponent } from './noticias.component';
import { NoticiasRoutingModule } from './noticias-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    NoticiasRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [ NoticiasComponent ]
})
export class NoticiasModule { }
