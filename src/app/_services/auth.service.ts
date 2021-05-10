import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SESSION_STORAGE_TOKEN, SESSION_STORAGE_USERNAME } from '../_constants/app.constant';
import { LoginRequest } from '../_requests/login.request';
import { SignUpRequest } from '../_requests/signup.request';
import { LoginResponse } from '../_responses/login.response';
import { SignUpResponse } from '../_responses/signup.response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  signUp(req: SignUpRequest) {
    return this.httpClient.post<SignUpResponse>(environment.apiUrl + "/signup", req).pipe(map(res => {
    }));
  }


  login(req: LoginRequest) {
    return this.httpClient.post<LoginResponse>(environment.apiUrl + "/login", req).pipe(
      map((res) => {
        localStorage.setItem('user', req.username);
        localStorage.setItem('token', res.token);
      })
    );
  }

  loggedIn(): boolean {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return !(user === null && token === null)
  }

}
