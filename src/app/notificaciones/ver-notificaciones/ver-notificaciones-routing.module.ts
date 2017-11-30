import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { VerNotificacionesComponent } from './ver-notificaciones.component';

const routes: Routes = [
  {
    path: '',
    component: VerNotificacionesComponent,
    data: {
      title: 'Ver Notificaciones'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerNotificacionesRoutingModule {}
