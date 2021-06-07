import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagosServicioPageRoutingModule } from './pagos-servicio-routing.module';

import { PagosServicioPage } from './pagos-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagosServicioPageRoutingModule
  ],
  declarations: [PagosServicioPage]
})
export class PagosServicioPageModule {}
