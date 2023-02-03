import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdServiceService } from 'src/app/services/prod-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  productos: any[] = [];

  constructor(private router:Router, private dataService: ProdServiceService){

  }

  ngOnInit(): void {
    this.dataService.getProductos().subscribe(res => {
      this.productos = res;
    })
  }

  ver(){
    this.router.navigate(['/detalle'])
  }

}
