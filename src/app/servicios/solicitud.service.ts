import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSolicitud } from '../modelos/solicitud.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  url = "http://localhost:3000"
  token: string = ""; 

 constructor(private Http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = servicioSeguridad.ObtenerToken();
  }
  ObtenerSolicitudporId(id: string): Observable<ModeloSolicitud> {
    return this.Http.get<ModeloSolicitud>(`${this.url}/solicituds/${id}`);
  }

  CrearSolicitud(solicitud: ModeloSolicitud): Observable<ModeloSolicitud> {
    return this.Http.post<ModeloSolicitud>(`${this.url}/solicituds `, solicitud, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EditarSolicitud(solicitud: ModeloSolicitud): Observable<ModeloSolicitud> {
    return this.Http.put<ModeloSolicitud>(`${this.url}/solicituds/${solicitud.id}`, solicitud, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  BuscarSolicitud(): Observable<ModeloSolicitud[]> {
    return this.Http.get<ModeloSolicitud[]>(`${this.url}/solicituds/buscar-solicitud`);
  }

  EliminarSolicitud(id:string): Observable<any> {
    return this.Http.delete<ModeloSolicitud>(`${this.url}/solicituds/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
  
}

