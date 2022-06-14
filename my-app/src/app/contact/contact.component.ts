import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ConfigService } from '../config.service'; 
import { todos } from 'src/todo'; 


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contacts_list : todos[] =[];

  constructor(private _service:ConfigService) { }
  ngOnInit(): void {

    this._service.getDetails()
    .subscribe(data => this.contacts_list = data);
  }
 
    
}
