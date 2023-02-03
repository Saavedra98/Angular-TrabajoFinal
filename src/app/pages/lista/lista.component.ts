import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdServiceService } from 'src/app/services/prod-service.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  productos: any[] = [];

  constructor(private router: Router, private dataService: ProdServiceService ){

  }

  ngOnInit(): void {

    this.dataService.getProductos().subscribe(res => {
      this.productos = res;
    })
  }

  agregar(){
    this.router.navigate(['/registrarProducto'])
  }
  

  onClickDelete(producto: Producto) {
    const response = this.dataService.deletedProducto(producto)
    console.log(response)
  }

}
