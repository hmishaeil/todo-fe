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
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('this is client side error');
            errorMsg = `CLIENT Error: ${error.error.message}`;
          }
          else {
            console.log('this is server side error');

            switch (error.status) {
              case 404:
                this.toastr.error("Invalid resource requested.")
                break;
              default:
                break;
            }
            errorMsg = `SERVER Error Code: ${error.status},  Message: ${JSON.stringify(error)}`;
          }

          this.toastr.info(errorMsg)
          console.log(errorMsg);
          return throwError(errorMsg);
        })
      )
  }
}
