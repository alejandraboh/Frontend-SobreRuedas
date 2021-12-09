import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';

@Component({
  selector: 'app-crear-asesor',
  templateUrl: './crear-asesor.component.html',
  styleUrls: ['./crear-asesor.component.css']
})
export class CrearAsesorComponent implements OnInit {
  fgValidador:FormGroup=this.fb.group({
    "estado":["",[Validators.required]],
    "usuario":["",[Validators.required]],
    "contrasena":["",[Validators.required]],
    "nombre_completo":["",[Validators.required]]

  })

  constructor(private fb:FormBuilder,
    private servicioAsesor:AsesorService,
    private router:Router) { }

  ngOnInit(): void {
  }

  GuardarAsesor(){
    
    let estado=this.fgValidador.controls["estado"].value;
    let usuario=this.fgValidador.controls["usuario"].value;
    let contrasena=this.fgValidador.controls["contrasena"].value;
    let nombre_completo=this.fgValidador.controls["nombre_completo"].value;

    let a=new ModeloAsesor();
    a.Estado=estado;
    a.Usuario=usuario;
    a.Contrasena=contrasena;
    a.Nombre_Completo=nombre_completo;
     

    this.servicioAsesor.CrearAsesor(a).subscribe((datos:ModeloAsesor)=>{
      alert(`Se ha creado exitosamente el asesor con id ${datos.id}`);
      this.router.navigate(["/asesor/buscar-asesor"]);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }
}

