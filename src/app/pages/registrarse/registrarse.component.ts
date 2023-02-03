import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  formRegistrar!: FormGroup;

  constructor(private router: Router, private dataService: UsuarioService) { 
    this.formRegistrar = new FormGroup({
      nombreControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
      emailControl: new FormControl('', [Validators.required, Validators.email]),
      contraseñaControl: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rolControl : new FormControl('', [Validators.required]),
    })

  }

 

  registrar(){

    if(this.formRegistrar.valid){

      swal.fire({
        icon: 'success',
        title: 'Registrado Exitosamente',
        showConfirmButton: false,
        timer: 1500
      })

      console.log(this.formRegistrar.value);
      const response = this.dataService.addPersona(this.formRegistrar.value);
      console.log(response)
      
      
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
