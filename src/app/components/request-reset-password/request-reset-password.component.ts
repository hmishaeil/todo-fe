import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InitResetPasswordRequest } from 'src/app/_requests/init_reset_password.request';
import { ResetPasswordRequest } from 'src/app/_requests/reset_password.request';
import { AuthService } from 'src/app/_services/auth.service';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestRestPasswordComponent implements OnInit {

  email: string;
  resetPasswordRequestEmailed: boolean;

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  requestResetPassword() {

    const req: InitResetPasswordRequest = new InitResetPasswordRequest();
    req.username = this.email;

    this.authService.requestResetPassword(req).subscribe(
      res => {
        this.resetPasswordRequestEmailed = true
      },
      error => {

        swal({
          text: "Make sure you entered the proper email address.",
          icon: "warning",
          buttons: {
            confirm: { text: 'Ok', className: 'btn btn-primary' },
          },
        });

      });
  }
}
