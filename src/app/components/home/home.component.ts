import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SignUpRequest } from 'src/app/_requests/signup.request';
import { AuthService } from 'src/app/_services/auth.service';

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
    req.username = this.email;
    req.password = this.password;

    this.authService.signUp(req).subscribe(
      res => {
        this.toastr.success('User created!', 'Great Success');
        this.userCreated = true;
      } 
    );
  }
}
