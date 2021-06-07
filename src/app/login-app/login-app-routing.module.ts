import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAppPage } from './login-app.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAppPageRoutingModule {}
