import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit: string = '?_limit=10';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put(`${this.todosUrl}/${todo.id}`, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(`${this.todosUrl}/${todo.id}`, httpOptions);
  }

  addTodo(todo: Todo): Observable<any> {
    return this.http.post<Todo>(`${this.todosUrl}`, todo, httpOptions);
  }
}
