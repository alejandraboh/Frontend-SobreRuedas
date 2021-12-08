import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarSesionGuard } from 'src/app/guardianes/validar-sesion.guard';
import { BuscarNuevoVehiculoComponent } from './buscar-nuevo-vehiculo/buscar-nuevo-vehiculo.component';
import { BuscarUsadoVehiculoComponent } from './buscar-usado-vehiculo/buscar-usado-vehiculo.component';
import { CotizarVehiculoComponent } from './cotizar-vehiculo/cotizar-vehiculo.component';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  {
    path:"buscar-nuevo-vehiculo",
    component: BuscarNuevoVehiculoComponent
  },
  {
    path:"buscar-usado-vehiculo",
    component: BuscarUsadoVehiculoComponent
  },
  {
    path:"crear-vehiculo",
    component: CrearVehiculoComponent,
    canActivate:[ValidarSesionGuard]
  },
  {
    path:"editar-vehiculo",
    component: EditarVehiculoComponent
  },
  {
    path:"eliminar-vehiculo",
    component: EliminarVehiculoComponent
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
