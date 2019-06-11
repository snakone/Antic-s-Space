import { NgModule } from '@angular/core';
import { HttpService,
         ArticleService,
         UserService,
         AuthService,
         CommentService,
         ReactionService,
         HistoryService } from './services.index';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    HttpService,
    ArticleService,
    UserService,
    AuthService,
    CommentService,
    ReactionService,
    HistoryService
  ]
})

export class ServicesModule { }