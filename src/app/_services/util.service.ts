import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

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

  showPermissionDeniedAlert(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-secondary mx-3',
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      html: '<h3 class="text-danger">Permission Denied!</h3>',
      backdrop: `rgba(0,0,0,0.4)`,
      confirmButtonText: `Back to Home`
    }).then(() => this.router.navigate(['/']))
  }

}
