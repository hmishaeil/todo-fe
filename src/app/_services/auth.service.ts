import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SESSION_STORAGE_TOKEN, SESSION_STORAGE_USERNAME } from '../_constants/app.constant';
import { SignUpRequest } from '../_requests/signup.request';
import { SignUpResponse } from '../_responses/signup.response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  signUp(req: SignUpRequest) {
    return this.httpClient.post<SignUpResponse>(environment.apiUrl + "/signup", req).pipe(map(res => {
      // sessionStorage.setItem(SESSION_STORAGE_USERNAME, username);
      // sessionStorage.setItem(SESSION_STORAGE_TOKEN, res.token);
    }));
  }

  isUserLoggedIn(): boolean {
    const username = sessionStorage.getItem(SESSION_STORAGE_USERNAME);
    return !(username === null)
  }
}
