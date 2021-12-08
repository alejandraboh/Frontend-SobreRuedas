import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { CotizaComponent } from './cotiza/cotiza.component';
import { FiltroVehiculoComponent } from './filtro-vehiculo/filtro-vehiculo.component';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

const routes: Routes = [
  {
    path:"bienvenido",
    component: BienvenidoComponent
  },
  {
    path:"contactanos",
    component: ContactanosComponent
  },
  {
    path:"cotiza",
    component: CotizaComponent
  },
  {
    path:"filtro-vehiculo",
    component: FiltroVehiculoComponent
  },
  {
    path:"mision-vision",
    component: MisionVisionComponent
  },
  {
    path:"registrate",
    component: RegistrateComponent
  },
  {
    path:"ubicacion",
    component: UbicacionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class inicioRoutingModule { }
