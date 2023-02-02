import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  constructor(private router: Router) { }

  formRegistrar = new FormGroup({
    nombreControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
    emailControl: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    contraseñaControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  registrar(){

    if(this.formRegistrar.valid){
      swal.fire({
        icon: 'success',
        title: 'Registrado Exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/'])
    }else{
      swal.fire({
        icon: 'error',
        title: 'No se registro ',
        text: 'Intentelo de nuevo',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }


}
