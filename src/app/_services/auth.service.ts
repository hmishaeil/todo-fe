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
import { take } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  signUp(req: SignUpRequest) {
    return this.httpClient.post<SignUpResponse>(environment.apiUrl + "/signup", req).pipe(map(res => {
    }));
  }

  verifyEmail(token: string) {
    return this.httpClient.get<void>(environment.apiUrl + `/verify-email/${token}`)
  }

  login(req: LoginRequest) {
    return this.httpClient.post<LoginResponse>(environment.apiUrl + "/login", req).pipe(
      map((res) => {
        localStorage.setItem('user', req.username);
        localStorage.setItem('token', res.token);

        let jwtData = res.token.split('.')[1]
let decodedJwtJsonData = window.atob(jwtData)
console.log(decodedJwtJsonData)
let decodedJwtData = JSON.parse(decodedJwtJsonData)

      })
    );
  }

  requestResetPassword(req: InitResetPasswordRequest) {
    return this.httpClient.post(environment.apiUrl + "/request-reset-password", req);
  }

  resetPassword(req: ResetPasswordRequest) {
    return this.httpClient.post(environment.apiUrl + "/reset-password", req);
  }

  validateJwt(token: string, username: string) {
    return this.httpClient.get<boolean>(environment.apiUrl + `/validate-jwt/${token}/${username}`);
  }

  isLoggedIn(){
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("user");

    return !(token === null || username === null)
  }

}
