import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { StorageService } from '@app/core/storage/storage.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  constructor(private storage: StorageService,
              private nav: NavController,
              private user: UserService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.storage.getToken()) {
      this.user.setUser(null);
      return true;
    }
    console.log('No need Login when you are already logged!');
    this.nav.navigateRoot('home');
    return false;
  }

}
