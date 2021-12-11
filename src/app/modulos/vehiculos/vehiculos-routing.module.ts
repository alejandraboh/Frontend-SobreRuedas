import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarSesionGuard } from 'src/app/guardianes/validar-sesion.guard';
import { BuscarVehiculoComponent } from './buscar-vehiculo/buscar-vehiculo.component';
import { CotizarVehiculoComponent } from './cotizar-vehiculo/cotizar-vehiculo.component';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  {
    path:"buscar-vehiculo",
    component: BuscarVehiculoComponent
  },
  {
    path:"crear-vehiculo",
    component: CrearVehiculoComponent,
    canActivate:[ValidarSesionGuard]
  },
  {
    path:"editar-vehiculo",
    component: EditarVehiculoComponent,
    canActivate:[ValidarSesionGuard]
  },
  {
    path:"eliminar-vehiculo",
    component: EliminarVehiculoComponent,
    canActivate:[ValidarSesionGuard]
  },
  {
    path:"cotizar-vehiculo",
    component: CotizarVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
