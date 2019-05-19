import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONSTANTS } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private menu: MenuController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      if (screen.availWidth < 769) {
        this.menu.open().then(() => {
          this.menu.close().then(() => {
            // this.splashScreen.hide();
            document.getElementById('htmlSplash').style.display = 'none';
          });
        });
      } else {
      }
    });
    this.translate.setDefaultLang(APP_CONSTANTS.DEFAULT_LANGUAGE);
    this.translate.use(APP_CONSTANTS.DEFAULT_LANGUAGE);
  }
}
