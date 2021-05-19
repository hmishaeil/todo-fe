import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignUpRequest } from 'src/app/_requests/signup.request';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userCreated: boolean;

  username: string;
  password: string;
  confirmPassword: string;

  constructor(    private toastr: ToastrService, 
    private authService: AuthService,
    private router: Router,) { }

  ngOnInit(): void {
  }
  onSignUp() {

    const req: SignUpRequest = new SignUpRequest();
    req.username = this.username;
    req.password = this.password;

    this.authService.signUp(req).subscribe(
      res => {
        this.toastr.success('User created!', 'Great Success');
        this.userCreated = true;

        sessionStorage.setItem("username", this.username)

        this.router.navigate(['/sent-verify-email'])
      } 
    );
  }
}
