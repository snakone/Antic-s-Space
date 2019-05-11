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
import { UserService } from '../user/user.service';
import { StorageService } from '@app/core/storage/storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private nav: NavController,
              private _user: UserService,
              private storage: StorageService) {
          console.log('JwtInterceptor');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(((res: HttpResponse<any>) => {
    }), ((error: HttpErrorResponse) => {
        if (error.status === 401) {
        this._user.loadUser().then(() => {
          this._user.refreshToken()
            .subscribe(res => {
            if (!res.ok) {
              this.nav.navigateRoot('/login');
              return throwError(error);
            }
            this.storage.setId(res.user._id);
            this.storage.setToken(res.token);
            this.nav.navigateRoot('/home');
          });
        }).catch(() => {
          this.nav.navigateRoot('/login');
          return throwError(error);
        });
      } else { return throwError(error); }
    })));
  }
}
