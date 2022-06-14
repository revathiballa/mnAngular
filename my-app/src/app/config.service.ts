import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { todos } from 'src/todo';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _url : string="https://jsonplaceholder.typicode.com/todos" ;

 
  constructor(private http : HttpClient) { }
  getDetails():Observable<todos[]>
  {
     return this.http.get<todos[]>(this._url)
  }
  
}
