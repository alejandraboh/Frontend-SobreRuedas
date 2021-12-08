import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from '../modelos/vehiculos.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  url = "http://localhost:3000"
  token: string = "";
  constructor(private Http: HttpClient,
    private servicioSeguridad: SeguridadService) {
    this.token = servicioSeguridad.ObtenerToken();
  }
  ObtenerVehiculos(): Observable<ModeloVehiculo[]> {
    return this.Http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`);
  }
  ObtenerVehiculoPorId(id: string): Observable<ModeloVehiculo> {
    return this.Http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`);
  }

  CrearVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo> {
    return this.Http.post<ModeloVehiculo>(`${this.url}/vehiculos`, vehiculo, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EditarVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo> {
    return this.Http.put<ModeloVehiculo>(`${this.url}/vehiculos/${vehiculo.id}`, vehiculo, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  BuscarNuevoVehiculo(): Observable<ModeloVehiculo[]> {
    return this.Http.get<ModeloVehiculo[]>(`${this.url}/vehiculos/buscar-nuevo-vehiculo`);
  }
  BuscarUsadoVehiculo(): Observable<ModeloVehiculo[]>{
    return this.Http.get<ModeloVehiculo[]>(`${this.url}/vehiculos/buscar-usado-vehiculo`);
  }

  EliminarVehiculo(id:string): Observable<any> {
    return this.Http.delete<any>(`${this.url}/vehiculos/${id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
  
}
