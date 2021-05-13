import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(environment.apiUrl + "/users/:id");
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.apiUrl + "/users");
  }

  addUser(): Observable<User> {
    return this.httpClient.post<User>(environment.apiUrl + "/users", "");
  }

  updateUser(): Observable<User> {
    return this.httpClient.put<User>(environment.apiUrl + "/users", "");
  }

}
