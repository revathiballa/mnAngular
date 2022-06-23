import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'login' , component: LoginComponent}, 
  {path:'register' , component: RegisterComponent},
  {path:'products', component: ProductsComponent},
  {path:'contact', component:ContactComponent},
  {path:'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent, ProductsComponent,ContactComponent,UserComponent]