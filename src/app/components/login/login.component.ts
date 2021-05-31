import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private authService: AuthService) { }


  username: string;
  password: string;

  errMsg = null;

  showSuccessfulResetPasswordMsg = 0;
  msg = "Your password has been reset successfully. You can login with your new password now."
  sub: any;

  userId: string;

  ngOnInit(): void {

    this.sub = this.activeRoute.queryParams
      .subscribe(params => {
        this.showSuccessfulResetPasswordMsg = params.successfulResetPassword;
      }
      );
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
          this.userId = localStorage.getItem('userId');
          this.router.navigate([`/users/${this.userId}/todos`])
        },
        err => {
          this.errMsg = err.error
        }
      )
  }

  onRequestResetPassword() {
    this.router.navigate(['request-reset-password'])
  }
}
