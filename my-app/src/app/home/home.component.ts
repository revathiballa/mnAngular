import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Person } from 'src/person';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //title='http Get and post example';
 
  person=new Person();
  people:Person[]

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.refreshPeople()
  }

  refreshPeople()
  {
    this.api.getPeople().subscribe(data=>{
      console.log(data)
      this.people=data;
    })
  }
  addPerson()
  {
    this.api.addPerson(this.person).subscribe(data=>{
      console.log(data)
      this.refreshPeople();
    })
  }
}

