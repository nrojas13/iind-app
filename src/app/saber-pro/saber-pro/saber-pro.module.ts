import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SaberProComponent } from './saber-pro.component';
import { SaberProRoutingModule } from './saber-pro-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    SaberProRoutingModule,
    ChartsModule,
    CommonModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [ SaberProComponent ]
})
export class SaberProModule { }
