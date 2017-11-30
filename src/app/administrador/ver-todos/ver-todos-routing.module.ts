import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { VerTodosComponent } from './ver-todos.component';

const routes: Routes = [
  {
    path: '',
    component: VerTodosComponent,
    data: {
      title: 'Ver Usuarios'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerTodosRoutingModule {}
