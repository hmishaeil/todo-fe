import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Utils from 'src/app/helpers/utils';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  accessRoles = Utils.accessRoles;

  loggedIn: boolean = false;

  userId: string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn()
    this.userId = localStorage.getItem("userId");
  }

  onLogout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    this.router.navigate(['/'])
  }

}
