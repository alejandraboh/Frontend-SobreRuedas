import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAsesorComponent } from './buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './eliminar-asesor/eliminar-asesor.component';

const routes: Routes = [
  {
    path:"buscar-asesor",
    component: BuscarAsesorComponent
  },
  {
    path:"editar-asesor",
    component: EditarAsesorComponent
  },
  {
    path:"crear-asesor",
    component: CrearAsesorComponent
  },
  {
    path:"eliminar-vehiculo",
    component: EliminarAsesorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
