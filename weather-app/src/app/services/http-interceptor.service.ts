import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private toastr: ToastrService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError((error) => this.handelError(error)));
  }

  private handelError(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.toastr.error('An error occurred on the server, please try again later', 'Message');
    }

    return throwError(error);
  }
}
