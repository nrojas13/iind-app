import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CargarDatosComponent } from './cargar-datos.component';

const routes: Routes = [
  {
    path: '',
    component: CargarDatosComponent,
    data: {
      title: 'Cargar Datos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargarDatosRoutingModule {}
