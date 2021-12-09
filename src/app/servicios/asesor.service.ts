import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAsesor } from '../modelos/asesor.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  url = "http://localhost:3000"
  token: string = "";

  constructor(private Http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = servicioSeguridad.ObtenerToken();
  }
  ObtenerAsesor(): Observable<ModeloAsesor[]> {
    return this.Http.get<ModeloAsesor[]>(`${this.url}/asesor`);
  }

  CrearAsesor(asesor: ModeloAsesor): Observable<ModeloAsesor> {
    return this.Http.post<ModeloAsesor>(`${this.url}/asesor `, asesor, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EditarAsesor(asesor: ModeloAsesor): Observable<ModeloAsesor> {
    return this.Http.put<ModeloAsesor>(`${this.url}/asesor/${asesor.id}`, asesor, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  BuscarAsesor(): Observable<ModeloAsesor[]> {
    return this.Http.get<ModeloAsesor[]>(`${this.url}/asesor/buscar-asesor`);
  }

  EliminarAsesor(id:string): Observable<any> {
    return this.Http.delete<any>(`${this.url}/asesor/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
  
}

