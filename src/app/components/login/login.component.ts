import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    // const auth = this.authService.authenticate(this.email, this.password).
    //   subscribe(
    //     res => {
    //       this.router.navigate(['welcome', this.email])
    //     },
    //     err => {
    //       this.errMsg = err.error
    //     }
    //   )}
  }
}
