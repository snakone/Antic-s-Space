import { Component, OnInit } from '@angular/core';
import { MENU } from '@app/shared/shared.data';
import { User } from '@app/shared/interfaces/interfaces';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  menu = MENU;
  user: User;

  constructor(private _user: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this._user.loadUser()
      .then(() => {
        this.user = this._user.getUser();
    });
  }

}
