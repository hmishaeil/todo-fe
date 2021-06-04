import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/Todo.model';
import { User } from '../models/User.model';
import { AddUserRequest } from '../_requests/add_user.request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.apiUrl + "/users"

  constructor(private httpClient: HttpClient) {
  }

  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.url + `/${id}`);
  }

  getUserTodos(id: number): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url + `/${id}/todos`);
  }

  getUsers(searchTerm: string = null): Observable<User[]> {

    let usersUrl = this.url;

    if(searchTerm !== null){
      usersUrl += `?searchTerm=${searchTerm}`
    }

    return this.httpClient.get<User[]>(usersUrl);
  }

  addUser(user: AddUserRequest): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.url, user);
  }

}
