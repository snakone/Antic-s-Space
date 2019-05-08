import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private nav: NavController) {
    console.log('JwtInterceptor');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(((res: HttpResponse<any>) => {
    }), ((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return;
      } else { return throwError(error); }
    })));
  }
}
