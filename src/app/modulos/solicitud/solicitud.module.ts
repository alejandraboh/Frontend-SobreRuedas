import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';
import { BuscarSolicitudComponent } from './buscar-solicitud/buscar-solicitud.component';
import { DetalleSolicitudComponent } from './detalle-solicitud/detalle-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    BuscarSolicitudComponent,
    DetalleSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitudModule { }
