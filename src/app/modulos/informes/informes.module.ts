import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformesRoutingModule } from './informes-routing.module';
import { EliminarInformesComponent } from './eliminar-informes/eliminar-informes.component';
import { CrearInformesComponent } from './crear-informes/crear-informes.component';
import { BuscarInformesComponent } from './buscar-informes/buscar-informes.component';
import { EditarInformesComponent } from './editar-informes/editar-informes.component';


@NgModule({
  declarations: [
    EliminarInformesComponent,
    CrearInformesComponent,
    BuscarInformesComponent,
    EditarInformesComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule
  ]
})
export class InformesModule { }
