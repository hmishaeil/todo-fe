import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ResetPasswordRequest } from 'src/app/_requests/reset_password.request';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password: string;
  confirmPassword: string;
  token: string;
  username: string;

  constructor(
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams
      .subscribe(params => {
        this.token = params.token;
        this.username = params.username;
      }
      );
  }

  onResetPassword() {

    const req: ResetPasswordRequest = new ResetPasswordRequest();
    req.password = this.password;
    req.token = this.token;
    this.authService.resetPassword(req).subscribe(
      res => {
        this.router.navigate(['/login'], { queryParams: { 
          successfulResetPassword: 1,
          username: this.username
        } })
      }
    );
  }
}
