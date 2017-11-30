import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { VerNoticiasComponent } from './ver-noticias.component';

const routes: Routes = [
  {
    path: '',
    component: VerNoticiasComponent,
    data: {
      title: 'Noticias'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerNoticiasRoutingModule {}
