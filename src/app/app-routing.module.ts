import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule) },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'listar-user', loadChildren: './listar-user/listar-user.module#ListarUserPageModule' },
  { path: 'info-user/:id', loadChildren: './info-user/info-user.module#InfoUserPageModule' },
  { path: 'info-estacionamento/:id', loadChildren: './info-estacionamento/info-estacionamento.module#InfoEstacionamentoPageModule' },
  { path: 'register-park', loadChildren: './auth/register-park/register-park.module#RegisterParkPageModule' },
  { path: 'login-park', loadChildren: './auth/login-park/login-park.module#LoginParkPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'gerenciamento', loadChildren: './gerenciamento/gerenciamento.module#GerenciamentoPageModule' },
  { path: 'reserva/:id', loadChildren: './reserva/reserva.module#ReservaPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
