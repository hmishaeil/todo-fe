import { Component, OnInit } from '@angular/core';
import { LoginRequest } from './_requests/login.request';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'todo';

  constructor(public authService: AuthService) {
  }
  ngOnInit(): void {
  }

}
