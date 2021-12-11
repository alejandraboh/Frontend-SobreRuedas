import { Component, OnInit } from '@angular/core';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-buscar-asesor',
  templateUrl: './buscar-asesor.component.html',
  styleUrls: ['./buscar-asesor.component.css']
})
export class BuscarAsesorComponent implements OnInit {
  buscarAsesor: ModeloAsesor[]=[];
  constructor(private servicioAsesor:AsesorService) { }

  ngOnInit(): void {
    this.BuscarAsesor();
  }

  BuscarAsesor(){
    this.servicioAsesor.ObtenerAsesor().subscribe((datos:ModeloAsesor[])=>{
      this.buscarAsesor=datos;
    })
  }

 }
