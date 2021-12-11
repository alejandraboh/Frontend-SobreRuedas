import { Component, OnInit } from '@angular/core';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {
  buscarCliente: ModeloCliente[]=[];
  constructor(private servicioCliente:ClienteService) { }

  ngOnInit(): void {
    this.BuscarCliente();
  }

  BuscarCliente(){
    this.servicioCliente.ObtenerCliente().subscribe((datos:ModeloCliente[])=>{
      this.buscarCliente=datos;
    })
  }

 }