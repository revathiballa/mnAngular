import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/todo';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  constructor(private http: HttpService) {}
  getTodos(): Observable<Todo[]> {
    return this.http.getTodos();
  }
}
