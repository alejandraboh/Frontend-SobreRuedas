import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './template/error/error.component';
import { InicioComponent } from './template/inicio/inicio.component';

const routes: Routes = [
  {
    path: "home",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
 
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.seguridadModule)
  },
  {
    path: "administrador",
    loadChildren: () => import("./modulos/administrador/administrador.module").then(x => x.AdministradorModule)
  },
  {
    path: "administrador",
    loadChildren: () => import("./modulos/administrador/administrador.module").then(x => x.AdministradorModule)
  },
  {
    path: "asesor",
    loadChildren: () => import("./modulos/asesor/asesor.module").then(x => x.AsesorModule)
  },
  {
    path: "contactenos",
    loadChildren: () => import("./modulos/contactenos/contactenos.module").then(x => x.ContactenosModule)
  },
  {
    path: "cliente",
    loadChildren: () => import("./modulos/cliente/cliente.module").then(x => x.ClienteModule)
  },
  {
    path: "vehiculos",
    loadChildren: () => import("./modulos/vehiculos/vehiculos.module").then(x => x.VehiculosModule)
  },
  {
    path: "inicio",
    loadChildren: () => import("./modulos/inicio/inicio.module").then(x => x.inicioModule)
  },


 {
    path: "**",
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
