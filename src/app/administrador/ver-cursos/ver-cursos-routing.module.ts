import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { VerCursosComponent } from './ver-cursos.component';

const routes: Routes = [
  {
    path: '',
    component: VerCursosComponent,
    data: {
      title: 'Ver Cursos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerCursosRoutingModule {}
