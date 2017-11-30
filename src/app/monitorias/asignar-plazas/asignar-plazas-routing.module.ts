import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { AsignarPlazasComponent } from './asignar-plazas.component';

const routes: Routes = [
  {
    path: '',
    component: AsignarPlazasComponent,
    data: {
      title: 'Asignar Plazas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignarPlazasRoutingModule {}
