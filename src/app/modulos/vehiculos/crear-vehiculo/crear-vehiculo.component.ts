import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {
  fgValidador:FormGroup=this.fb.group({
    "estado":["",[Validators.required]],
    "marca":["",[Validators.required]],
    "referencia":["",[Validators.required]],
    "modelo":["",[Validators.required]],
    "valor":["",[Validators.required]],
    "url_foto":["",[Validators.required]],
    "url_youtube":["",[Validators.required]],

  })

  constructor(private fb:FormBuilder,
    private servicioVehiculo:VehiculosService,
    private router:Router) { }

  ngOnInit(): void {
  }

  GuardarVehiculo(){
    
    let estado=this.fgValidador.controls["estado"].value;
    let marca=this.fgValidador.controls["marca"].value;
    let modelo=parseInt(this.fgValidador.controls["modelo"].value);
    let referencia=this.fgValidador.controls["referencia"].value;
    let valor=parseInt(this.fgValidador.controls["valor"].value);
    let Url_foto=this.fgValidador.controls["url_foto"].value;
    let Url_Youtube=this.fgValidador.controls["url_youtube"].value;


    let v=new ModeloVehiculo();
    v.Estado=estado;
    v.Marca=marca;
    v.Modelo=modelo;
    v.Referencia=referencia;
    v.Valor=valor;
   v.Url_foto=Url_foto;
   v.Url_Youtube=Url_Youtube;
     

    this.servicioVehiculo.CrearVehiculo(v).subscribe((datos:ModeloVehiculo)=>{
      alert(`Se ha creado exitosamente el vehiculo con id ${datos.id}`);
      this.router.navigate(["/vehiculos/buscar-vehiculos"]);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }

}
