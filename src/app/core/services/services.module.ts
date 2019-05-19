import { NgModule } from '@angular/core';
import { HttpService,
         ArticleService,
         UserService,
         AuthService } from './services.index';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    HttpService,
    ArticleService,
    UserService,
    AuthService
  ]
})

export class ServicesModule { }