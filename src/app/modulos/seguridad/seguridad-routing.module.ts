import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
// import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
{
  path: "login",
  component : LoginComponent
},
{
  path: "logout",
  component : LogoutComponent
},

{
  path:"cambiar-contrasena",
  component: CambiarContrasenaComponent
},  
// {
//   path:"registro",
//   component: RegistroComponent
// },  

{
  path: "recuperar-contrasena",
  component : RecuperarContrasenaComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class seguridadRoutingModule { }
