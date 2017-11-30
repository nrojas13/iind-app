import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { NotificacionesComponent } from './notificaciones.component';

const routes: Routes = [
  {
    path: '',
    component: NotificacionesComponent,
    data: {
      title: 'Noticias'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesRoutingModule {}
