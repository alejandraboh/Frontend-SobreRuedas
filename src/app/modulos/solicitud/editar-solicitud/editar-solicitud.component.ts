import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {
  id:string="";
  fgValidador:FormGroup=this.fb.group({
    "fecha_solicitud":["",[Validators.required]],
    "url_cotizacion":["",[Validators.required]],

  })

  constructor(private fb:FormBuilder,
    private servicioSolicitud:SolicitudService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarSolicitud();
  }
  BuscarSolicitud(){
    this.servicioSolicitud.ObtenerSolicitudporId(this.id).subscribe((datos:ModeloSolicitud)=>{
      this.fgValidador.controls["fecha_solicitud"].setValue(datos.Fecha_Solicitud);
      this.fgValidador.controls["url_cotizacion"].setValue(datos.Url_Cotizacion);


    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })
  }
  EditarSolicitud(){
    let fecha_solicitud=this.fgValidador.controls["fecha_solicitud"].value;
    let url_cotizacion=this.fgValidador.controls["url_cotizacion"].value;

    let s=new ModeloSolicitud();
    s.Fecha_Solicitud=fecha_solicitud;
    s.Url_Cotizacion=url_cotizacion;


    this.servicioSolicitud.EditarSolicitud(s).subscribe((datos:ModeloSolicitud)=>{
      alert(`Se ha actualizado exitosamente la solicitud con id ${this.id}`);
      this.router.navigate(["/solicitud/buscar-solicitud"]);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }

}
