import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarSesionGuard } from 'src/app/guardianes/validar-sesion.guard';
import { BuscarSucursalComponent } from './buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './eliminar-sucursal/eliminar-sucursal.component';

const routes: Routes = [
  {
    path:"buscar-sucursal",
    component: BuscarSucursalComponent
  },
  {
    path:"crear-sucursal",
    component: CrearSucursalComponent,
    canActivate:[ValidarSesionGuard]    
  },
  {
    path:"editar-sucursal",
    component: EditarSucursalComponent,
    canActivate:[ValidarSesionGuard]
  },
  {
    path:"eliminar-sucursal",
    component: EliminarSucursalComponent,
    canActivate:[ValidarSesionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
