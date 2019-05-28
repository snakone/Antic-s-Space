import { Component, OnInit } from '@angular/core';
import { MENU } from '@app/shared/shared.data';
import { UserService } from '@core/services/user/user.service';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  menu = MENU;

  constructor(public _user: UserService,
              private menuCtrl: MenuController,
              private nav: NavController) { }

  ngOnInit() {}

  close(): void {
    this.menuCtrl.close();
  }

  exit(): void {
    this.menuCtrl.close();
    this.nav.navigateRoot('/login');
  }

}
