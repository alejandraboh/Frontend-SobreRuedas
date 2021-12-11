import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCliente } from '../modelos/cliente.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = "http://localhost:3000"
  token: string = "";

  constructor(private Http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = servicioSeguridad.ObtenerToken();
  }
  ObtenerCliente(): Observable<ModeloCliente[]> {
    return this.Http.get<ModeloCliente[]>(`${this.url}/cliente`);
  }

  CrearCliente(cliente: ModeloCliente): Observable<ModeloCliente> {
    return this.Http.post<ModeloCliente>(`${this.url}/cliente `, cliente, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EditarCliente(cliente: ModeloCliente): Observable<ModeloCliente> {
    return this.Http.put<ModeloCliente>(`${this.url}/cliente/${cliente.id}`, cliente, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  BuscarCliente(): Observable<ModeloCliente> {
    return this.Http.get<ModeloCliente>(`${this.url}/cliente/buscar-cliente`);
  }

  EliminarCliente(id:string): Observable<any> {
    return this.Http.delete<any>(`${this.url}/cliente/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
}

