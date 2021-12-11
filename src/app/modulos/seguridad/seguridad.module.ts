import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { seguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
// import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecuperarContrasenaComponent,
    CambiarContrasenaComponent,
    LogoutComponent
    // RegistroComponent
  ],
  imports: [
    CommonModule,
    seguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class seguridadModule { }
