import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodos() {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/todos`);
  }

  getTodo(id: number) {
    return this.httpClient.get<Todo>(`http://localhost:8080/todos/${id}`);
  }

  createTodo(todo: Todo) {
    return this.httpClient.post<Todo>(`http://localhost:8080/todos`, todo);
  }

  editTodo(todo: Todo) {

    return this.httpClient.put<Todo>(`http://localhost:8080/todos`, todo);
  }


}
