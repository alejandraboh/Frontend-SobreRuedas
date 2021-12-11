import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.component.html',
  styleUrls: ['./buscar-vehiculo.component.css']
})
export class BuscarVehiculoComponent implements OnInit {

  buscarVehiculo:ModeloVehiculo[]=[];
  constructor(private servicioVehiculo:VehiculosService) { }

  ngOnInit(): void {
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){
    this.servicioVehiculo.ObtenerVehiculos().subscribe((datos:ModeloVehiculo[])=>{
      this.buscarVehiculo=datos;
    })
  }

}
