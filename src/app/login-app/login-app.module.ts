import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAppPageRoutingModule } from './login-app-routing.module';

import { LoginAppPage } from './login-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAppPageRoutingModule
  ],
  declarations: [LoginAppPage]
})
export class LoginAppPageModule {}
