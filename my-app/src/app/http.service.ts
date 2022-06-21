import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Todo } from 'src/todo';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  [x: string]: any;
  private _rootPath = 'https://jsonplaceholder.typicode.com';
  private _showsRootPath = 'http://api.tvmaze.com';
  constructor(private http:HttpClient) { }
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this._rootPath}/todos`);

  }
getShows():Observable<Todo[]>
{
  return this.http.get<Todo[]>(`${this._showsRootPath}/search/shows?q=postman`);

}
}
