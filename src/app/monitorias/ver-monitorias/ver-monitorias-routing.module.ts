import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { VerMonitoriasComponent } from './ver-monitorias.component';

const routes: Routes = [
  {
    path: '',
    component: VerMonitoriasComponent,
    data: {
      title: 'Ver Monitorias'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerMonitoriasRoutingModule {}
