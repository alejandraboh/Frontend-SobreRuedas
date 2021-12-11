import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RespuestaAutenticarAsesorModelo } from '../modelos/respuestaautenticarasesor.modelo';
import { RespuestaAutenticarClienteModelo } from '../modelos/respuestaautenticarcliente.modelo';
import { RespuestaIdentificarAdministradorModelo} from '../modelos/respuestaidentificaradministrador.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  identificarRegistro(datos: any) {
    throw new Error('Method not implemented.');
  }
  IdentificarRegistroCliente(datos: any) {
    throw new Error('Method not implemented.');
  }
  IdentificarRegistro(nombre_completo: any, email: any) {
    throw new Error('Method not implemented.');
  }
  datosSesion = new BehaviorSubject<RespuestaIdentificarAdministradorModelo>(new RespuestaIdentificarAdministradorModelo());
  datosSesionCliente = new BehaviorSubject<RespuestaAutenticarClienteModelo>(new RespuestaAutenticarClienteModelo());
  datosSesionAsesor = new BehaviorSubject<RespuestaAutenticarAsesorModelo>(new RespuestaAutenticarAsesorModelo());



  constructor(private http:HttpClient) { }

  ObtenerObsSesion(){
    return this.datosSesion.asObservable();
  }

  ActualizarObservable(datos:RespuestaIdentificarAdministradorModelo){
    this.datosSesion.next(datos);
  }
  ActualizarObservableCliente(datos:RespuestaAutenticarClienteModelo){
    this.datosSesion.next(datos);
  }
  ActualizarObservableAsesor(datos:RespuestaAutenticarAsesorModelo){
    this.datosSesion.next(datos);
  }


  IdentificarAdministrador(usuario:string,clave:string):Observable<RespuestaIdentificarAdministradorModelo>{
    return this.http.post<RespuestaIdentificarAdministradorModelo>("http://localhost:3000/autenticarAdministrador", //Confirmar usuario o rol
    {
      usuario:usuario,
      contrasena:clave
    },{
      headers: new HttpHeaders({})
    })
  }

  AlmacenarInfoSesion(datos:RespuestaIdentificarAdministradorModelo){
    datos.autenticado=true;
    let datos_str=JSON.stringify(datos);
    localStorage.setItem("datosSesion", datos_str);
    this.ActualizarObservable(datos);
  }
  EliminarInfoSesion(){
    localStorage.removeItem("datosSesion");
    this.ActualizarObservable(new RespuestaIdentificarAdministradorModelo());
  }

  ObtenerInfoSesion(){
    let datos_str=localStorage.getItem("datosSesion");
    if(datos_str){
      let datos=JSON.parse(datos_str);
      return datos;
    }else{
      return null;
    }
  }

  VerificarInfoSesion(){
    let datos_str=localStorage.getItem("datosSesion");
    if(datos_str){
      this.ActualizarObservable(JSON.parse(datos_str));
    }
  }

   autenticarCliente(usuario:string,clave:string):Observable<RespuestaAutenticarClienteModelo>{
       return this.http.post<RespuestaAutenticarClienteModelo>("http://localhost:3000/autenticarCliente",
       {
         usuario:usuario,
         contrasena:clave
       },{
         headers: new HttpHeaders({})
       })
   }

   AlmacenarInfoSesionCliente(datos:RespuestaAutenticarClienteModelo){
    datos.autenticado=true;
    let datos_str=JSON.stringify(datos);
    localStorage.setItem("datosSesion", datos_str);
    this.ActualizarObservable(datos);
  }
  EliminarInfoSesionCliente(){
    localStorage.removeItem("datosSesion");
    this.ActualizarObservable(new RespuestaAutenticarClienteModelo());
  }

  ObtenerInfoSesionCliente(){
    let datos_str=localStorage.getItem("datosSesion");
    if(datos_str){
      let datos=JSON.parse(datos_str);
      return datos;
    }else{
      return null;
    }
  }

  VerificarInfoSesionCliente(){
    let datos_str=localStorage.getItem("datosSesion");
    if(datos_str){
      this.ActualizarObservable(JSON.parse(datos_str));
    }
  }

   autenticarAsesor(usuario:string,clave:string):Observable<RespuestaAutenticarAsesorModelo>{
        return this.http.post<RespuestaAutenticarAsesorModelo>("http://localhost:3000/autenticarAsesor",
       {
          usuario:usuario,
          contrasena:clave
          },{
            headers: new HttpHeaders({})
           })
 }
 AlmacenarInfoSesionAsesor(datos:RespuestaAutenticarAsesorModelo){
  datos.autenticado=true;
  let datos_str=JSON.stringify(datos);
  localStorage.setItem("datosSesion", datos_str);
  this.ActualizarObservable(datos);
}
EliminarInfoSesionAsesor(){
  localStorage.removeItem("datosSesion");
  this.ActualizarObservable(new RespuestaAutenticarAsesorModelo());
}

ObtenerInfoSesionAsesor(){
  let datos_str=localStorage.getItem("datosSesion");
  if(datos_str){
    let datos=JSON.parse(datos_str);
    return datos;
  }else{
    return null;
  }
}

VerificarInfoSesionAsesor(){
  let datos_str=localStorage.getItem("datosSesion");
  if(datos_str){
    this.ActualizarObservable(JSON.parse(datos_str));
  }
}

ObtenerToken(){
  let datos_str=localStorage.getItem("datosSesion");
  if(datos_str){
    let datos=JSON.parse(datos_str);
    return datos.tk;
  }else{
    return "";
  }
}

}
