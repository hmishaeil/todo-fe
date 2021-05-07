import { Component, OnInit } from '@angular/core';
import { SESSION_STORAGE_TOKEN, SESSION_STORAGE_USERNAME } from 'src/app/_constants/app.constant';
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

  onLogout(){
    sessionStorage.removeItem(SESSION_STORAGE_USERNAME);
    sessionStorage.removeItem(SESSION_STORAGE_TOKEN);
  }
}
