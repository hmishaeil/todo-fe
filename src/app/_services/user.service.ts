import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.model';
import { AddUserRequest } from '../_requests/add_user.request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(environment.apiUrl + `/users/${id}`);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.apiUrl + "/users");
  }

  addUser(user: AddUserRequest): Observable<User> {
    return this.httpClient.post<User>(environment.apiUrl + "/users", user);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(environment.apiUrl + "/users", user);
  }

}
