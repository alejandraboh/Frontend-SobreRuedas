import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { inicioRoutingModule } from './inicio-routing.module';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { FiltroVehiculoComponent } from './filtro-vehiculo/filtro-vehiculo.component';
import { CotizaComponent } from './cotiza/cotiza.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { ContactanosComponent } from './contactanos/contactanos.component';


@NgModule({
  declarations: [
    BienvenidoComponent,
    FiltroVehiculoComponent,
    CotizaComponent,
    MisionVisionComponent,
    UbicacionComponent,
    RegistrateComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    inicioRoutingModule
  ]
})
export class inicioModule { }
