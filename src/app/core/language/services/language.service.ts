import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@app/app.config';
import { TranslateService } from '@ngx-translate/core';

@Injectable()

export class LanguageService {

  constructor(private translateService: TranslateService,
    @Inject(APP_CONFIG) private appConfig: AppConfig) {
    this.setDefault();
  }

  private setDefault() {
    if (!this.translateService.getDefaultLang()) {
      this.translateService.setDefaultLang(this.appConfig.DEFAULT_LANGUAGE);
    }
    this.translateService.use(this.appConfig.DEFAULT_LANGUAGE);
  }

  public change(lang: string) {
    this.translateService.use(lang);
  }

  public getCurrent(): string {
    return this.translateService.currentLang;
  }

}
