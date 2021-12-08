import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-buscar-nuevo-vehiculo',
  templateUrl: './buscar-nuevo-vehiculo.component.html',
  styleUrls: ['./buscar-nuevo-vehiculo.component.css']
})
export class BuscarNuevoVehiculoComponent implements OnInit {

  buscarNuevoVehiculo:ModeloVehiculo[]=[];
  constructor(private servicioVehiculo:VehiculosService) { }

  ngOnInit(): void {
    this.BuscarNuevoVehiculo();
  }

  BuscarNuevoVehiculo(){
    this.servicioVehiculo.BuscarNuevoVehiculo().subscribe((datos:ModeloVehiculo[])=>{
      this.buscarNuevoVehiculo=datos;
    })
  }

}
