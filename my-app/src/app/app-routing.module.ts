import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:'login' , component: LoginComponent}, 
  {path:'register' , component: RegisterComponent},
  {path:'products', component: ProductsComponent},
  {path:'products/:id',component:ProductDetailComponent},
  {path:'contact', component:ContactComponent},
  {path:'user', component:UserComponent},
  {path:'home', component:HomeComponent},
  {path:'error', component:ErrorComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent, ProductsComponent,ContactComponent,UserComponent]