import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-eliminar-vehiculo',
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrls: ['./eliminar-vehiculo.component.css']
})
export class EliminarVehiculoComponent implements OnInit {

  id:string="";
  fgValidador:FormGroup=this.fb.group({
    "estado":["",[Validators.required]],
    "marca":["",[Validators.required]],
    "modelo":["",[Validators.required]],
    "referencia":["",[Validators.required]],
    "valor":["",[Validators.required]],
    "url_foto":["",[Validators.required]],
    "url_Youtube":["",[Validators.required]]
  })

  constructor(private fb:FormBuilder,
    private servicioVehiculos:VehiculosService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarVehiculos();
  }

  BuscarVehiculos(){
    this.servicioVehiculos.ObtenerVehiculoPorId(this.id).subscribe((datos:ModeloVehiculo)=>{
      this.fgValidador.controls["estado"].setValue(datos.Estado);
      this.fgValidador.controls["marca"].setValue(datos.Marca);
      this.fgValidador.controls["modelo"].setValue(datos.Modelo);
      this.fgValidador.controls["referencia"].setValue(datos.Referencia);
      this.fgValidador.controls["valor"].setValue(datos.Valor);
      this.fgValidador.controls["url_foto"].setValue(datos.Url_foto);
      this.fgValidador.controls["url_Youtube"].setValue(datos.Url_Youtube);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }

  EliminarVehiculo(){  

    this.servicioVehiculos.EliminarVehiculo(this.id).subscribe((datos:any)=>{
      alert(`Se ha eliminado exitosamente el vehiculo con id ${this.id}`);
      this.router.navigate(["/vehiculos/buscar-vehiculos"]);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }

}





