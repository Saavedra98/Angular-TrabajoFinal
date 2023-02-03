import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProdServiceService } from 'src/app/services/prod-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{


  ngOnInit(): void {
    
  }

  // id!:string|null;
  // producto:Producto={
  //   nombre:'',
  //   imagen:'',
  //   descripcion:'',
  //   costo:0
  // }
  
  // datos: any[] = [];

  // constructor(private dataService:ProdServiceService,  private router:ActivatedRoute){

  // }

  // ngOnInit(): void {
  //   this.id=this.router.snapshot.paramMap.get('id')
  //   this.dataService.getProdOnly(this.id || '').subscribe(res=>{
  //     this.producto=res;

      
  //   })
  //   console.log(this.producto)
    
  // }

}
