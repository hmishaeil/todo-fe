import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { LoginRequest } from 'src/app/_requests/login.request';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService) { }

  username: string;
  password: string;

  errMsg = null;

  showSuccessfulResetPasswordMsg = 0;
  msg = "Your password has been reset successfully. You can login with your new password now."
  sub: Subscription;

  rememberMe: boolean = this.cookieService.check('todo_app_username');

  ngOnInit(): void {

    this.sub = this.activeRoute.queryParams
      .subscribe(params => {
        this.showSuccessfulResetPasswordMsg = params.successfulResetPassword;
      }
      );

    this.rememberMe ? this.username = this.cookieService.get('todo_app_username') : "";
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onLogin() {

    const loginReq: LoginRequest = new LoginRequest();
    loginReq.username = this.username;
    loginReq.password = this.password;

    this.authService.login(loginReq).
      subscribe(
        () => {
          const userId = this.authService.USER$.value.userId
          this.router.navigate([`/users/${userId}/todos`])
        },
        err => this.errMsg = err.error
      )
  }

  onRequestResetPassword() {
    this.router.navigate(['request-reset-password'])
  }

  onRememberMeChange() {
    this.rememberMe = !this.rememberMe;
    this.rememberMe ? this.cookieService.set('todo_app_username', this.username) : this.cookieService.delete('todo_app_username')
  }
}
