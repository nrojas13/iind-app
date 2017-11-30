import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { VerCitasComponent } from './ver-citas.component';

const routes: Routes = [
  {
    path: '',
    component: VerCitasComponent,
    data: {
      title: 'Citas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerCitasRoutingModule {}
