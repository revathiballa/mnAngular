import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Todo } from 'src/todo';
import { User } from 'src/users';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _rootPath = 'https://jsonplaceholder.typicode.com';
 
  constructor(private http:HttpClient) { }
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this._rootPath}/todos`);

  }
getUsers():Observable<User[]>
{
  return this.http.get<User[]>(`${this._rootPath}/users`)

}
}
