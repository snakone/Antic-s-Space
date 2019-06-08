import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { StorageService } from '@core/storage/storage.service';
import { NavController } from '@ionic/angular';
import { User, UserInfo, History, HistoryResponse } from '@app/shared/interfaces/interfaces';
import { UserInfoResponse } from '@shared/interfaces/interfaces';
import { HistoryService } from '@app/core/services/services.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  segment = 'Info';
  user: User;
  info: UserInfo;
  history: History[] = [];

  constructor(public _user: UserService,
              private storage: StorageService,
              private nav: NavController,
              private historyService: HistoryService) { }

  ngOnInit() {}

  ionViewDidEnter(): void {
    this.getUser();
  }

  private getUser(): void {
    this.user = this._user.getUser();
    this.getUserInfo();
    this.getUserHistory();
  }

  private getUserInfo(): void {
    this._user.getUserInfoById(this.user._id)
      .subscribe((res: UserInfoResponse) => {
        this.info = { comments: res.comments, reactions: res.reactions };
    });
  }

  private getUserHistory(): void {
    this.historyService.getHistoryByUser(this.user._id)
      .subscribe((res: HistoryResponse) => {
        if (res.ok) {
          this.history.push(...res.history);
        }
    });
  }

  async logOut(remove: boolean): Promise<void> {
    remove ? this.storage.reset() :
    await this.storage.clear();
    this._user.logout();
    this.nav.navigateRoot('/login');
  }

}
