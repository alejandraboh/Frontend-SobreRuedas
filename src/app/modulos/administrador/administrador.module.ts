import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CrearSucursalComponent } from './crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './eliminar-sucursal/eliminar-sucursal.component';
import { BuscarSucursalComponent } from './buscar-sucursal/buscar-sucursal.component';




@NgModule({
  declarations: [
   
  
    CrearSucursalComponent,
    EditarSucursalComponent,
    EliminarSucursalComponent,
    BuscarSucursalComponent
  ],

  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
