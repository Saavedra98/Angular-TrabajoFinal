import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { MenuLogOutComponent } from './menu-log-out/menu-log-out.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    MenuLoginComponent,
    MenuLogOutComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],exports: [
    MenuComponent,
    MenuLoginComponent,
    MenuLogOutComponent
  ],
})
export class ComponentsModule { }
