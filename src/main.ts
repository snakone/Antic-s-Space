import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { APP_CONSTANTS } from './app/app.config';

import 'hammerjs';


document.getElementById('htmlSplashVersion').innerHTML = APP_CONSTANTS.APP_VERSION;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
