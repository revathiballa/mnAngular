import { Component, OnInit } from '@angular/core';

import { RegisterUser } from '../register-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    

   
  ) { }

  topics=['Angular','React','Vue'];

  user= new RegisterUser('revathi','revathi@gmail.com',7382109959,'','morning',true);
  required=true;
  
}

