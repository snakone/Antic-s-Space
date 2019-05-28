import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONSTANTS } from '@app/app.config';

import { timer } from 'rxjs';
import { ThemeService } from '@shared/theme/theme.service';
import { StorageService } from './core/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  showSplash = true;
  version = APP_CONSTANTS.APP_VERSION;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private menu: MenuController,
    private storage: StorageService,
    private theme: ThemeService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      if (screen.availWidth < 769) {
        this.menu.open().then(() => {
          this.menu.close().then(() => {
            this.splashScreen.hide();
            timer(2000).subscribe(() => this.showSplash = false);
          });
        });
      } else {
        this.splashScreen.hide();
        timer(2000).subscribe(() => { this.showSplash = false; });
      }
    });
    this.translate.setDefaultLang(APP_CONSTANTS.DEFAULT_LANGUAGE);
    this.translate.use(APP_CONSTANTS.DEFAULT_LANGUAGE);

    if (this.storage.getTheme()) {
      this.theme.addBodyClass(this.storage.getTheme());
    }

    if (this.storage.getLanguage()) {
      this.translate.use(this.storage.getLanguage());
    }
  }
}
