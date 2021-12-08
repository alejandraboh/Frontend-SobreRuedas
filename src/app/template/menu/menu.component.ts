import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RespuestaAutenticarAsesorModelo } from 'src/app/modelos/respuestaautenticarasesor.modelo';
import { RespuestaAutenticarClienteModelo } from 'src/app/modelos/respuestaautenticarcliente.modelo';
import { RespuestaIdentificarAdministradorModelo } from 'src/app/modelos/respuestaidentificaradministrador.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  autenticado: boolean=false;
  subs: Subscription=new Subscription();
  constructor(private seguridadServicio:SeguridadService) { }

  ngOnInit(): void {
    this.subs=this.seguridadServicio.ObtenerObsSesion().subscribe((datos: RespuestaIdentificarAdministradorModelo)=>{
      this.autenticado=datos.autenticado;
    })
  }
  ngOnInitCliente(): void {
    this.subs=this.seguridadServicio.ObtenerObsSesion().subscribe((datos: RespuestaAutenticarClienteModelo)=>{
      this.autenticado=datos.autenticado;
    })
  }
  ngOnInitAsesor(): void {
    this.subs=this.seguridadServicio.ObtenerObsSesion().subscribe((datos: RespuestaAutenticarAsesorModelo)=>{
      this.autenticado=datos.autenticado;
    })
  }

}
