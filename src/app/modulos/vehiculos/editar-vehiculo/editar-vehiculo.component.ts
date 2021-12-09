import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculos.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {
  id:string="";
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
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){
    this.servicioVehiculo.ObtenerVehiculoPorId(this.id).subscribe((datos:ModeloVehiculo)=>{
      this.fgValidador.controls["marca"].setValue(datos.Marca);
      this.fgValidador.controls["referencia"].setValue(datos.Referencia);
      this.fgValidador.controls["modelo"].setValue(datos.Modelo);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }

  EditarVehiculo(){
    let marca=this.fgValidador.controls["marca"].value;
    let referencia=this.fgValidador.controls["referencia"].value;
    let modelo=parseInt(this.fgValidador.controls["modelo"].value);

    let v=new ModeloVehiculo();
    v.Marca=marca;
    v.Referencia=referencia;
    v.Modelo=modelo;
    v.id=this.id;


    this.servicioVehiculo.EditarVehiculo(v).subscribe((datos:ModeloVehiculo)=>{
      alert(`Se ha actualizado exitosamente el vehiculo con id ${this.id}`);
      this.router.navigate(["/vehiculos/buscar-vehiculos"]);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }

}
