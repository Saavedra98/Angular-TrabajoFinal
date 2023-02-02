import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  constructor(private router: Router){

  }

  agregar(){
    this.router.navigate(['/registrarProducto'])
  }
  
}
