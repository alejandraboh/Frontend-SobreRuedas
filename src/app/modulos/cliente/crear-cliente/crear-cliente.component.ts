import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  fgValidador:FormGroup=this.fb.group({
    "estado":["",[Validators.required]],
    "usuario":["",[Validators.required]],
    "contrasena":["",[Validators.required]],
    "nombre_completo":["",[Validators.required]]

  })

  constructor(private fb:FormBuilder,
    private servicioCliente:ClienteService,
    private router:Router) { }

  ngOnInit(): void {
  }

  GuardarCliente(){
    
    let nombre_completo=this.fgValidador.controls["nombre_completo"].value;
    let usuario=this.fgValidador.controls["usuario"].value;
    let id=this.fgValidador.controls["id"].value;
    let rol=this.fgValidador.controls["rol"].value;

    let c=new ModeloCliente();
    c.Nombre_Completo=nombre_completo;
    c.Usuario=usuario;
    c.id=id;
    c.rol=rol;
     

    this.servicioCliente.CrearCliente(c).subscribe((datos:ModeloCliente)=>{
      alert(`Se ha creado exitosamente el cliente con id ${datos.id}`);
      this.router.navigate(["/cliente/buscar-cliente"]);

    },(error:any)=>{
      alert(`Error: ${error.error.error.message}`)
      console.error('An error occurred:', error.error);
    })

  }
  
}
