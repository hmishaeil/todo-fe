import { Component, OnInit } from '@angular/core';
import { validateOrReject } from 'class-validator';
import { ToastrService } from 'ngx-toastr';
import { SignUpRequest } from 'src/app/_requests/signup.request';
import { AuthService } from 'src/app/_services/auth.service';
import _ from "lodash-es";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userCreated: boolean;

  email: string;
  password: string;
  confirmPassword: string;

  constructor(
    private toastr: ToastrService, 
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
  }

  onSignUp() {

    const req: SignUpRequest = new SignUpRequest();
    req.email = this.email;
    req.username = this.email;
    req.password = this.password;

    this.authService.signUp(req).subscribe(
      res => {
        this.toastr.success('User created!', 'Great Success');
        this.userCreated = true;
      },
      err => {
        console.log(err)
        this.toastr.error(err.error.errors || "TODO: Error");
      }
    );
  }
}
