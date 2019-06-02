import { NgModule } from '@angular/core';
import { HttpService,
         ArticleService,
         UserService,
         AuthService,
         CommentService } from './services.index';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    HttpService,
    ArticleService,
    UserService,
    AuthService,
    CommentService
  ]
})

export class ServicesModule { }