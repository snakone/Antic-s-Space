import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { APP_CONSTANTS, APP_CONFIG } from '@app/app.config';
import { CoreModule } from '@core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ComponentsModule } from '@shared/components/components.module';
import { StorageService } from '@core/storage/storage.service';

export function Factory(provider: StorageService) {
  return () => provider.load();
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    ComponentsModule,
    ServiceWorkerModule.register('ngsw-worker.js',
                                 { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: APP_CONFIG, useValue: APP_CONSTANTS },
    {
      provide: APP_INITIALIZER,
      useFactory: Factory,
      deps: [StorageService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
