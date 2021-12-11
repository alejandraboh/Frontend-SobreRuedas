import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarSesionGuard } from 'src/app/guardianes/validar-sesion.guard';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './eliminar-cliente/eliminar-cliente.component';

const routes: Routes = [
  {
    path:"buscar-cliente",
    component: BuscarClienteComponent
  },
  {
    path:"crear-cliente",
    component: CrearClienteComponent,
    canActivate:[ValidarSesionGuard]
  },
  {
    path:"editar-cliente",
    component: EditarClienteComponent,
    canActivate:[ValidarSesionGuard]
  },
  {
    path:"eliminar-cliente",
    component: EliminarClienteComponent,
    canActivate:[ValidarSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
