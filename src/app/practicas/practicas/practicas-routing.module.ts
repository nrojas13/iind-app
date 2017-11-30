import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { PracticasComponent } from './practicas.component';

const routes: Routes = [
  {
    path: '',
    component: PracticasComponent,
    data: {
      title: 'Ver Prácticas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticasRoutingModule {}
