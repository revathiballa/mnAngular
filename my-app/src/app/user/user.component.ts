import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { User } from 'src/users';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: User[] = [];
  constructor(private _service:UsersService) { }

  ngOnInit(): void {
    this._service.getUsers()
    .subscribe(data => this.users = data);
    
  }

}
