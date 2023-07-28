import { Component, Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';
import { HttpService } from './http.service';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
  routingComponents,
  HomeComponent,
  ErrorComponent,
  ProductDetailComponent,
  ProductsComponent,
  LoginComponent,
  ContactComponent,
  UserComponent,
  RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TodoService,UsersService, HttpService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}



