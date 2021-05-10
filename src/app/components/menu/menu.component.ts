import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
