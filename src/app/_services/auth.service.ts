import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../_requests/login.request';
import { InitResetPasswordRequest } from '../_requests/init_reset_password.request';
import { SignUpRequest } from '../_requests/signup.request';
import { LoginResponse } from '../_responses/login.response';
import { SignUpResponse } from '../_responses/signup.response';
import { ResetPasswordRequest } from '../_requests/reset_password.request';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

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

  requestResetPassword(req: InitResetPasswordRequest){
    return this.httpClient.post(environment.apiUrl + "/request-reset-password", req);
  }

  resetPassword(req: ResetPasswordRequest){
    return this.httpClient.post(environment.apiUrl + "/reset-password", req);
  }

  loggedIn(): boolean {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return !(user === null && token === null)
  }

}
