import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {
  fgValidador:FormGroup=this.fb.group({
    "fecha_solicitud":["",[Validators.required]],
    "url_solicitud":["",[Validators.required]],
  })

constructor(private fb:FormBuilder,
    private servicioSolicitud:SolicitudService,
    private router:Router) { }

ngOnInit(): void {
  }

GuardarSolicitud(){
    
    let fecha_solicitud=this.fgValidador.controls["fecha_solicitud"].value;
    let url_cotizacion=this.fgValidador.controls["url_cotizacion"].value;

    let s=new ModeloSolicitud();
    s.Fecha_Solicitud=fecha_solicitud;
    s.Url_Cotizacion=url_cotizacion;
                         

    this.servicioSolicitud.CrearSolicitud(s).subscribe((datos:ModeloSolicitud)=>{
      alert(`Se ha creado exitosamente la solicitud con id ${datos.id}`);
      this.router.navigate(["/solicitud/buscar-solicitud"]);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }

}