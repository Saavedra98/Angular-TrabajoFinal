import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  formLogin = new FormGroup({
    usuarioControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
    contraseñaControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  ngOnInit(): void {

  }

  login() {
    console.log(this.formLogin.valid);

    if (this.formLogin.valid) {

      if(this.formLogin.value.usuarioControl == 'admin' && this.formLogin.value.contraseñaControl == '123456'){
        swal.fire({
          icon: 'success',
          title: 'Bienvenido Admin',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/lista'])
      }else{
        swal.fire({
          icon: 'success',
          title: 'Usuario Correcto',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/home'])
      }
      
    } else {
      swal.fire({
        icon: 'error',
        title: 'Usuario Incorrecto',
        text: 'Ingrese otra vez',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

}
