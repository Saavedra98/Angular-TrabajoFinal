import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ListaComponent } from './pages/lista/lista.component';
import { RegistrarProductoComponent } from './pages/registrar-producto/registrar-producto.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'registrarse', component:RegistrarseComponent},
  
  {path:'home', component:HomeComponent},
  {path:'productos', component:ProductosComponent},
  {path:'pedidos', component:PedidosComponent},
  {path:'detalle', component:DetalleComponent},
  
  {path:'lista', component:ListaComponent},
  {path:'registrarProducto', component:RegistrarProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
