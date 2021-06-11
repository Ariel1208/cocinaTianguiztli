import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-app',
    pathMatch: 'full'
  },
  {
    path: 'login-app',
    loadChildren: () => import('./login-app/login-app.module').then( m => m.LoginAppPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pagos-servicio',
    loadChildren: () => import('./pagos-servicio/pagos-servicio.module').then( m => m.PagosServicioPageModule)
  },
  {
    path: 'encuestas',
    loadChildren: () => import('./encuestas/encuestas.module').then( m => m.EncuestasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
