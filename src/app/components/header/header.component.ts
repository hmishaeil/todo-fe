import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Auth } from 'src/app/models/Auth.model';
import { AuthService } from 'src/app/_services/auth.service';
import { UtilService } from 'src/app/_services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  sub: Subscription;
  user: Auth = null;

  constructor(public authService: AuthService,
    private utilService: UtilService,
    private router: Router) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.authService.USER$.asObservable().subscribe(data => {
      this.user = data;
    })
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

  accessRoles(roles: []) {
    return this.utilService.accessRoles(roles)
  }

  getClassPerUserRole() {
    const role = this.user?.role || null;
    let className;

    switch (role) {
      case "ROLE_ADMIN":
        className = "bg-danger"
        break;
      case "ROLE_SUPPORT":
        className = "bg-info"
        break;
      case "ROLE_USER":
        className = "bg-primary"
        break;
      case null:
        break;
      default:
        throw new Error("Invalid Role.");
    }

    return className;
  }
}
