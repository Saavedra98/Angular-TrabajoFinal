import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent {

  constructor(private router: Router) { }

  formRegistrar = new FormGroup({
    nombreControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
    descripcionControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
    costoControl: new FormControl('', [Validators.required, ]),
    ofertaControl: new FormControl('', [Validators.required, ]),
    imagenControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  registar(){
    if(this.formRegistrar.valid){
      swal.fire({
        icon: 'success',
        title: 'Producto Registrado Correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/lista'])
    }else{
      swal.fire({
        icon: 'error',
        title: 'Producto No Registrado ',
        text: 'Intentelo de nuevo',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }


}
