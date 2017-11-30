import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { IndicadoresAdministradorComponent } from './indicadores-administrador.component';

const routes: Routes = [
  {
    path: '',
    component: IndicadoresAdministradorComponent,
    data: {
      title: 'Indicadores Generales'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresAdministradorRoutingModule {}
