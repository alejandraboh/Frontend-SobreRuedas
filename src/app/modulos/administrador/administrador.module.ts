import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { BuscarAsesorComponent } from './asesor/buscar-asesor/buscar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';


@NgModule({
  declarations: [
    CrearAsesorComponent,
    BuscarAsesorComponent,
    EliminarAsesorComponent,
    EditarAsesorComponent,
    EditarClienteComponent,
    BuscarClienteComponent,
    CrearClienteComponent,
    EliminarClienteComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
