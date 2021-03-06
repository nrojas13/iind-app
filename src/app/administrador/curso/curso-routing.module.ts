import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CursoComponent } from './curso.component';

const routes: Routes = [
  {
    path: '',
    component: CursoComponent,
    data: {
      title: 'Curso'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule {}
