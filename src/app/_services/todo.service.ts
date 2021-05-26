import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = environment.apiUrl + "/todos";

  constructor(private httpClient: HttpClient) { }

  getTodos(searchTerm: string = null) {

    let todosUrl = this.url;

    if (searchTerm !== null) {
      todosUrl += `?searchTerm=${searchTerm}`
    }

    return this.httpClient.get<Todo[]>(todosUrl);
  }

  getTodo(id: number) {
    return this.httpClient.get<Todo>(this.url + `/${id}`);
  }

  createTodo(todo: Todo) {
    return this.httpClient.post<Todo>(this.url, todo);
  }

  updateTodo(todo: Todo) {
    return this.httpClient.put<Todo>(this.url, todo);
  }

  deleteTodo(id: number) {
    return this.httpClient.delete(this.url + `/${id}`);
  }

}
