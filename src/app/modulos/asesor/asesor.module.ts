import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { BuscarSolicitudComponent } from './buscar-solicitud/buscar-solicitud.component';
import { EditarEstadoSolicitudComponent } from './editar-estado-solicitud/editar-estado-solicitud.component';

import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { BuscarVehiculoComponent } from './buscar-vehiculo/buscar-vehiculo.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';
import { BuscarInformesFechaComponent } from './buscar-informes-fecha/buscar-informes-fecha.component';


@NgModule({
  declarations: [
    BuscarSolicitudComponent,
    EditarEstadoSolicitudComponent,
    
    CrearVehiculoComponent,
    BuscarVehiculoComponent,
    EditarVehiculoComponent,
    BuscarInformesFechaComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
