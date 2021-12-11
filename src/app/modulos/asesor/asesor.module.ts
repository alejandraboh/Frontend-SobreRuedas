import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { EliminarAsesorComponent } from './eliminar-asesor/eliminar-asesor.component';
import { EditarAsesorComponent } from './editar-asesor/editar-asesor.component';
import { BuscarAsesorComponent } from './buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './crear-asesor/crear-asesor.component';


@NgModule({
  declarations: [
    CrearAsesorComponent,
    BuscarAsesorComponent,
    EditarAsesorComponent,
    EliminarAsesorComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
