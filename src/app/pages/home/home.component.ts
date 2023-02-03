import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdServiceService } from 'src/app/services/prod-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

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
