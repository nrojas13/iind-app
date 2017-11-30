import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SaberProComponent } from './saber-pro.component';

const routes: Routes = [
  {
    path: '',
    component: SaberProComponent,
    data: {
      title: 'Saber Pro'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaberProRoutingModule {}
