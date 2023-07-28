import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Forms';
  countryList:country[]=
  [ 
    new country("1","india"),
    new country("2","usa"),
    new country("3","uk")
  ];
  contact: contact;
  
  ngOnInit() {
 
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    };
 
  }
 
  onSubmit(contactForm:NgForm) {
    console.log(this.contact);
  }
  setDefaults() {
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    };
  }
  changeCountry() {
    this.contact.country = "1";
  }
  reset(contactForm :NgForm) {
    contactForm.resetForm();
  }
}
export class country{
id:string;
name:string;
constructor(id:string,name:string){
  this.id=id;
  this.name=name;
}
}
export class contact {
  firstname:string;
  lastname:string;
  email:string;
  gender:string;
  isMarried:boolean;
  country:string;
  address: {
    city:string;
    street:string;
    pincode:string;
  }
 
} 