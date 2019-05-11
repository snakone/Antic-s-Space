import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { HttpService } from '@core/services/http/http.service';
import { ErrorHandlerService } from '@core/error-handler/error-handler.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageModule } from './language/language.module';
import { CORE_MODULE_CONSTANTS, CORE_MODULE_CONFIG } from './core.module.config';
import { LanguageService } from './language/services/language.service';
import { IonicGestureConfig } from '@app/shared/config/gesture.config';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { StorageModule } from './storage/storage.module';
import { ServicesModule } from './services/services.module';
import { JwtInterceptor } from './services/http/jwt.interceptor';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, CORE_MODULE_CONSTANTS.TRANSLATE_CONFIG.I18N_PATH,
                                 CORE_MODULE_CONSTANTS.TRANSLATE_CONFIG.SUFFIX_FILE);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ServicesModule,
    StorageModule,
    IonicStorageModule.forRoot(),
    LanguageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [],
  providers: [
    HttpService,
    LanguageService,
    { provide: CORE_MODULE_CONFIG, useValue: CORE_MODULE_CONSTANTS },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig }

  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
