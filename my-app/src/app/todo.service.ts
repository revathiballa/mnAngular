import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from 'src/todo';
import {HttpService} from './http.service'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _url : string="https://jsonplaceholder.typicode.com/todos" ;

 
  constructor(private http : HttpService) { }
  getTodos():Observable<Todo[]>
  {
     return this.http.get<Todo[]>(this._url);
        
  }
}
