import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/_requests/login.request';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  email: string;
  password: string;

  successLogin = true;
  errMsg = null;

  ngOnInit(): void {
  }

  onLogin() {

    const loginReq: LoginRequest = new LoginRequest();
    loginReq.username = this.email;
    loginReq.password = this.password;

    const auth = this.authService.login(loginReq).
      subscribe(
        res => {
          this.router.navigate(['welcome', this.email])
        },
        err => {
          this.errMsg = err.error
        }
      )
  }
}
