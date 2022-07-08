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

@NgModule({
  declarations: [
    AppComponent,
  routingComponents
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TodoService,UsersService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}



