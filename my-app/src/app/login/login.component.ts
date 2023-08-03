import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  login=new login();
  ngOnInit(): void {
    
  }
onSubmit(userForm:NgForm)
{ //const express= require ('express')
  //const app=express()
  //app.listen(9000)
  console.log(userForm.value)
}

}

export class login{
name:string
pwd:string
}
