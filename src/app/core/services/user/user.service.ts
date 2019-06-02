import { Injectable } from '@angular/core';
import { User, UserResponse } from '@app/shared/interfaces/interfaces';
import { APP_CONSTANTS } from '@app/app.config';
import { Observable } from 'rxjs';
import { StorageService } from '@app/core/storage/storage.service';
import { HttpService } from '../http/http.service';

@Injectable()

export class UserService {

  readonly API_USERS = APP_CONSTANTS.END_POINT + 'users';
  readonly API_TOKEN = APP_CONSTANTS.END_POINT + 'token';

  public user: User;
  public token = '';

  constructor(private http: HttpService,
              private storage: StorageService) {
    console.log('UserService');
   }

   public getUser(): User {
    if (!this.user) { this.verifyToken(); }
    return { ...this.user };
  }

  public loadUser(): Promise<void> {
    return new Promise((resolve, rej) => {
      const id = this.storage.getId();
      if (id) {
        this.getUserById(id)
          .subscribe((res: UserResponse) => {
            if (res.ok) {
              this.user = res.user;
              resolve();
            }
        });
      } else { rej(); }
    });
  }

  public getUserById(id: string): Observable<UserResponse> {
    return this.http.get(this.API_USERS + `/${id}`);
  }

  public updateUser(user: User): Observable<UserResponse> {
    return this.http.put(this.API_USERS, user);
  }

  public refreshToken(): Observable<UserResponse> {
    if (!this.user) {
      this.loadUser();
      return;
    }
    return this.http.post(this.API_TOKEN, this.user);
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public setGuest(): void {
    this.user = {
      name: 'Guest',
      email: 'Guest@AnticSpace.com',
      account: 'Guest',
      password: 'Guest'
    };
  }

  public areYouGuest(): boolean {
    if (!this.user) { return; }
    return this.user.account === 'Guest' ? true : false;
  }

  public deleteUser(): Observable<UserResponse> {
    return this.http.delete(this.API_USERS);
  }

  public logout(): void {
    this.user = null;
  }

  public verifyToken(): Promise<boolean> {
    if (!this.storage.getToken()) { return Promise.resolve(false); }
    return new Promise<boolean>((resolve, rej) => {
      this.http.get(this.API_TOKEN)
        .subscribe((res: UserResponse) => {
          if (res.ok) {
            this.user = res.user;
            if (!this.storage.getId()) {
              this.storage.setId(res.user._id);
            }
            resolve(true);
          }
        }, (err => {
            resolve(false);
      }));
    });
  }

}
