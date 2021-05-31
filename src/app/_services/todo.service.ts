import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = (userId: number) => environment.apiUrl + `/users/${userId}/todos`;

  constructor(private httpClient: HttpClient) { }

  getTodos(userId: number, searchTerm: string = null) {

    let myUrl = this.url(userId);    
    if (searchTerm !== null) {
      myUrl += `?searchTerm=${searchTerm}`
    }

    return this.httpClient.get<Todo[]>(myUrl);
  }

  getTodo(userId, todoId) {
    return this.httpClient.get<Todo>(this.url(userId) + `/${todoId}`);
  }

  createTodo(userId, todo: Todo) {
    return this.httpClient.post<Todo>(this.url(userId), todo);
  }

  updateTodo(userId, todo: Todo) {
    return this.httpClient.put<Todo>(this.url(userId) + `/${todo.id}`, todo);
  }

  deleteTodo(userId, id: number) {
    return this.httpClient.delete(this.url(userId) + `/${id}`);
  }

}
