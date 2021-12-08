import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarInformesFechaComponent } from './buscar-informes-fecha/buscar-informes-fecha.component';
import { BuscarSolicitudComponent } from './buscar-solicitud/buscar-solicitud.component';
import { BuscarVehiculoComponent } from './buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { EditarEstadoSolicitudComponent } from './editar-estado-solicitud/editar-estado-solicitud.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';

const routes: Routes = [
  {
    path:"buscar-informes-fecha",
    component: BuscarInformesFechaComponent
  },
  {
    path:"buscar-solicitud",
    component: BuscarSolicitudComponent
  },
  {
    path:"buscar-vehiculo",
    component: BuscarVehiculoComponent
  },
  {
    path:"crear-vehiculo",
    component: CrearVehiculoComponent
  },
  {
    path:"editar-estado-solicitud",
    component: EditarEstadoSolicitudComponent
  },
  {
    path:"editar-vehiculo",
    component: EditarVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
