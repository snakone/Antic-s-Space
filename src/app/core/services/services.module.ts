import { NgModule } from '@angular/core';
import { HttpService,
         ArticleService,
         UserService,
         AuthService,
         CommentService,
         ReactionService } from './services.index';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    HttpService,
    ArticleService,
    UserService,
    AuthService,
    CommentService,
    ReactionService
  ]
})

export class ServicesModule { }