import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InitResetPasswordRequest } from 'src/app/_requests/init_reset_password.request';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestRestPasswordComponent implements OnInit {

  username: string;
  resetPasswordRequestEmailed: boolean;

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  requestResetPassword() {

    const req: InitResetPasswordRequest = new InitResetPasswordRequest();
    req.username = this.username;

    this.authService.requestResetPassword(req).subscribe(
      () => {
        this.resetPasswordRequestEmailed = true,
        sessionStorage.setItem("username", this.username)
      });
  }
}
