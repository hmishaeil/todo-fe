import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private authService: AuthService){}

  accessRoles(roles: string[]) {

    let hasAccess = false;

    const userRole = this.authService.USER$.value.role;
    roles.forEach(role => {
        if (userRole.includes(role)) {
            hasAccess = true;
            return; 
        }
    });

    return hasAccess;
}
}
