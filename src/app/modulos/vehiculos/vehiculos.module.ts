import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { BuscarNuevoVehiculoComponent } from './buscar-nuevo-vehiculo/buscar-nuevo-vehiculo.component';
import { CotizarVehiculoComponent } from './cotizar-vehiculo/cotizar-vehiculo.component';
import { BuscarUsadoVehiculoComponent } from './buscar-usado-vehiculo/buscar-usado-vehiculo.component';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './eliminar-vehiculo/eliminar-vehiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuscarNuevoVehiculoComponent,
    CotizarVehiculoComponent,
    BuscarUsadoVehiculoComponent,
    CrearVehiculoComponent,
    EditarVehiculoComponent,
    EliminarVehiculoComponent
  ],
  imports: [
    CommonModule,
    VehiculosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VehiculosModule { }
