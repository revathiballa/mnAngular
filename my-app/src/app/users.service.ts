import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from 'src/users';
import {HttpService} from './http.service'





@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpService) { }
  getUsers():Observable<User[]>
  {
    return this.http.getUsers();
    
    
  }
}


