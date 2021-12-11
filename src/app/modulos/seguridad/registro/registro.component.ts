// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { SeguridadService } from 'src/app/servicios/seguridad.service';

// @Component({
//   selector: 'app-registro',
//   templateUrl: './registro.component.html',
//   styleUrls: ['./registro.component.css']
// })
// export class RegistroComponent implements OnInit {
//   fgValidador: FormGroup = this.fb.group({
//     "nombre_completo": ["", [Validators.required, Validators.email]],
//     "email": ["", [Validators.required]]
//     // "telefono": ["", [Validators.required]]
//   });
//   constructor(private fb: FormBuilder,
//     private servicioSeguridad: SeguridadService,
//     private router: Router) { }

//   ngOnInit(): void {
//   }

//   IdentificarRegistro() {
//     let nombre_completo = this.fgValidador.controls["nombre_completo"].value;
//     let email = this.fgValidador.controls["email"].value;
//     // let telefono = this.fgValidador.controls["telefono"].value;

//     //  alert(claveCifrada)
//     this.servicioSeguridad.IdentificarRegistro(nombre_completo, email).subscribe((datos: any) => {
//       this.servicioSeguridad.AlmacenarInfoRegistro(datos);
//       this.router.navigate(["/inicio"]);

//     }, (error: any) => {
//       alert("Error: ${error.error.error.message}")
//       console.error('An error occurred:', error.error);
//     })
//   }

// }


