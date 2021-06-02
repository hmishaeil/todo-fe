import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from '../_services/util.service';

@Injectable({
  providedIn: 'root'
})

export class PermissionGuard implements CanActivate {

  constructor(private utilService: UtilService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const allowedRole = route.data['role'];
    if (this.utilService.accessRoles([allowedRole])) {
      return true;
    } else {
      this.utilService.showPermissionDeniedAlert()
      return false;
    }
  }
}
