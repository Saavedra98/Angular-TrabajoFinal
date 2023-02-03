import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dataService: UsuarioService) { }

  formLogin = new FormGroup({
    usuarioControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
    contraseñaControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  persona: any[] = [];
  datos: any[] = [];


  ngOnInit(): void {
    this.dataService.getPersona().subscribe(res => {
      this.persona = res;
      // console.log(this.persona);
      for (let i of this.persona) {
        this.datos.push({ email: i.emailControl, contraseña: i.contraseñaControl, rol: i.rolControl, 
          nombre: i.nombreControl })
      }


      console.log('*******');
      console.log(this.datos);
      console.log('*******');

    })

  }

  tipo=0;
  valor=false;
  
  login() {

    this.tipo=0;
    this.valor=false;

    // console.log(this.formLogin.value);
    // console.log('Antes de igualar: ---------')
    // console.log(  'rol:' + this.tipo + '------------------' + 'Coincide:'+  this.valor + '--------------')

    for (let i of this.datos) {
      if (i.email == this.formLogin.get('usuarioControl')?.value && i.contraseña == this.formLogin.get('contraseñaControl')?.value) {
        this.tipo=i.rol;
        this.valor=true;

        localStorage.setItem('nombre', i.nombre)
      }
    }

    if(this.valor==true){
      
      if(this.tipo==1){
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
    }else{
      swal.fire({
        icon: 'error',
        title: 'Usuario Incorrecto',
        text: 'Ingrese otra vez',
        showConfirmButton: false,
        timer: 1500
      })
    }


    // console.log('Despues de igualar: ---------')
    // console.log( 'rol:' + this.tipo + '------------------' + 'Coincide:'+  this.valor + '--------------')
    
  }

}
