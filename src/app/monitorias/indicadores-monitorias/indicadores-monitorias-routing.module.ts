import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { IndicadoresMonitoriasComponent } from './indicadores-monitorias.component';

const routes: Routes = [
  {
    path: '',
    component: IndicadoresMonitoriasComponent,
    data: {
      title: 'Indicadores Monitorías'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresMonitoriasRoutingModule {}
