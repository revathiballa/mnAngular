import { Component,OnInit } from '@angular/core';
import { NgForm,ValidationErrors} from '@angular/forms';
import { ErrorComponent } from '../error/error.component';



//import { RegisterUser } from '../register-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  title='Registration Form'
  contact=new contact();

  ngOnInit():any {
    this.contact = {
      firstname: "Revathi",
      lastname: "Balla",
      email: "revathias38@gmail.com",
      pwd: "",
      re_pwd: "",
      gender: "female",
      num: 7382109959,
      address: { city: "Srikakulam", state: "Andhra Pradesh", pincode: 532410 }
    };
  }
  reset(contactForm :NgForm) {
    contactForm.resetForm();
  }
  onSubmit(contactForm:NgForm)
  {
    console.log(contactForm.value);
  }
  setDefaults() {
    this.contact = {
      firstname: "Revathi",
      lastname: "Balla",
      email: "revathias38@gmail.com",
      pwd:"",
      re_pwd:"",
      gender: "female",
      num:7382109959,
      address: { city: "Srikakulam", state:"Andhra Pradesh", pincode:532410}
    }
  }
  }

  export class contact
  {
    firstname:string
    lastname:string;
    email:string;
    pwd:string;
    re_pwd:string;
    gender:string;
    num:number;
    address:{
      city:string;
      state:string;
      pincode:number
      }
  
    
  }


  /*topics=['Angular','React','Vue'];

  user= new RegisterUser('revathi','revathi@gmail.com',7382109959,'','morning',true);
  required=true;*/
  


