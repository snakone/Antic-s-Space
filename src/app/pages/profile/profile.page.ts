import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { StorageService } from '@core/storage/storage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  segment = 'Info';

  constructor(public _user: UserService,
              private storage: StorageService,
              private nav: NavController) { }

  ngOnInit() {}

  async logOut(remove: boolean): Promise<void> {
    remove ? this.storage.reset() :
    await this.storage.clear();
    this._user.logout();
    this.nav.navigateRoot('/login');
  }

  segmentChange(e: string): void {
    console.log(e);
  }

}
