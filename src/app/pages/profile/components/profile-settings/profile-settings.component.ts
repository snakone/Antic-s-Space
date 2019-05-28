import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';
import { CrafterService } from '@shared/crafter/crafter.service';
import { ColorSelectorComponent } from '@shared/components/color-selector/color-selector.component';
import { StorageService } from '@app/core/storage/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '@core/services/user/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})

export class ProfileSettingsComponent implements OnInit {

  @Input() user: User;
  language: string;
  remember: boolean;

  constructor(private crafter: CrafterService,
              private storage: StorageService,
              private translate: TranslateService,
              private _user: UserService,
              private nav: NavController) { }

  ngOnInit() {
    this.setSettings();
  }

  private setSettings(): void {
    this.language = this.storage.getLanguage();
    this.remember = this.storage.getRemember();
  }

  openSelectTheme(): void {
    this.crafter.popOver(ColorSelectorComponent);
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.storage.setLanguage(lang);
  }

  rememberLogin(value: string): void {
    value === 'yes' ?
    this.storage.save('remember', true) :
    this.storage.save('remember', false);
  }

  logout(): void {
    this._user.logout();
    this.storage.clear();
    this.nav.navigateRoot('/login');
  }

}
