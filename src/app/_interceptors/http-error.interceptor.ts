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

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: any) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `CLIENT Error: ${error.error.message}`;
          }
          else if (error instanceof HttpErrorResponse) {

            console.log("--------------------")
            console.log(error)
            console.log("--------------------")

            const errors = error?.error?.errors;

            errors?.forEach(error => {
              errorMsg += error
            });

            switch (error.status) {
              case 400:
              case 401:
              case 409:
                this.toastr.error(errorMsg);
                break;
              case 403:
                this.toastr.error("Permission Denied.")
                break;
              case 404:
                this.toastr.error("Invalid resource requested.")
                break;
              default:
                this.toastr.error(error.statusText)
                break;
            }
          } else {
            errorMsg = "Unknown error!";
          }
          return throwError(errorMsg);
        })
      )
  }
}
