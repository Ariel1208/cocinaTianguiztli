import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagosServicioPage } from './pagos-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: PagosServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosServicioPageRoutingModule {}
