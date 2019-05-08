import { NgModule } from '@angular/core';
import { HttpService,
         ArticleService } from './services.index';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    HttpService,
    ArticleService
  ]
})

export class ServicesModule { }