import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { UtilService } from '../_services/util.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private toastr: ToastrService,
    private utilService: UtilService
    ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: any) => {
          let errorMsg = "Unexpected error! Please contact support team.";

          // Client errors
          if (error.error instanceof ErrorEvent) {
            console.error(typeof (error))
            errorMsg = `CLIENT Error: ${error.error.message}`;
          }
          // Server errors
          else if (error instanceof HttpErrorResponse) {
            const errors = error?.error?.errors;
            errorMsg = "";
            errors?.forEach(error => {
              errorMsg += error
            });
            switch (error.status) {
              case 0:
                this.toastr.error("Connection refused.");
                break;
              case 400:
              case 401:
              case 409:
                this.toastr.error(errorMsg);
                break;
              case 403:
                // this.toastr.error("Permission Denied.")
                this.utilService.showPermissionDeniedAlert()
                break;
              case 404:
                this.toastr.error("Invalid resource requested.")
                break;
              default:
                this.toastr.error(error.statusText)
                break;
            }
          }
          return throwError(errorMsg);
        })
      )
  }
}
