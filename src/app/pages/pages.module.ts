import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ListaComponent } from './lista/lista.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrarseComponent,
    HomeComponent,
    ProductosComponent,
    DetalleComponent,
    PedidosComponent,
    ListaComponent,
    RegistrarProductoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ], exports: [
    LoginComponent,
    RegistrarseComponent,
    HomeComponent,
    ProductosComponent,
    DetalleComponent,
    PedidosComponent,
    ListaComponent,
    RegistrarProductoComponent,
  ],
})
export class PagesModule { }
