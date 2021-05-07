import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../components/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodos(user: string){
    const headers = null;
    
    return this.httpClient.get<Todo[]>
    (`http://localhost:8080/users/${user}/todos`, {headers});
  }

  getTodo(user: string, id: number){
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${user}/todos/${id}`);
  }

  deleteTodo(user: string, id: number){
    return this.httpClient.delete<void>(`http://localhost:8080/users/${user}/todos/${id}`);
  }

  updateTodo(todo: Todo){
    return this.httpClient.put<Todo>(`http://localhost:8080/users/${todo.user}/todos/${todo.id}`, todo);
  }

  createTodo(todo: Todo){
    return this.httpClient.post<Todo>(`http://localhost:8080/users/${todo.user}/todos`, todo);
  }

}
