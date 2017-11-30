import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { VerCitasComponent } from './ver-citas.component';
import { VerCitasRoutingModule } from './ver-citas-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import {DayPilotModule} from "daypilot-pro-angular";

@NgModule({
  imports: [
    VerCitasRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    Ng2SmartTableModule,
    DayPilotModule
  ],
  declarations: [ VerCitasComponent ]
})
export class VerCitasModule { }
