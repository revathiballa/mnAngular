import { Component, OnInit } from '@angular/core';
import { Server } from 'http';

//import { observable } from 'rxjs';
//import { TodoService } from '../todo.service'; 
//import { Todo } from 'src/todo'; 


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //public todos:Todo[]=[];
  constructor(/*private _service:TodoService*/) { }
  ngOnInit(): void {

   /* this._service.getTodos()
    .subscribe( data => this.todos = data);
      console.log(this.todos); */  
  }
 
  
}
