import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ProdServiceService } from 'src/app/services/prod-service.service';


@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent {

  formRegistrar!: FormGroup;

  constructor(private router: Router, private dataService: ProdServiceService) { 
    this.formRegistrar = new FormGroup({
      nombreControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
      descripcionControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
      costoControl: new FormControl('', [Validators.required, ]),
      ofertaControl: new FormControl('', [Validators.required, ]),
      imagenControl: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  

  }

  
  registar(){
    if(this.formRegistrar.valid){

      console.log(this.formRegistrar.value);
      const response = this.dataService.addProducto(this.formRegistrar.value);
      console.log(response)

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
