import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent implements OnInit{

  nombre!: string;


  ngOnInit(): void{
    this.nombre = String( localStorage.getItem('nombre'));
  }

  

}
