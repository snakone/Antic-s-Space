import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '@app/core/services/user/user.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ProfileGuard implements CanActivate {

  constructor(private user: UserService,
              private nav: NavController) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user.areYouGuest()) {
      this.nav.navigateRoot('/home');
      return false;
    } else { return true; }
  }

}
