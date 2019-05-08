import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArticlePage } from './article.page';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { ShareComponent } from './components/share/share.component';
import { ArticleCommentsComponent } from './components/article-comments/article-comments.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RelatedComponent } from './components/related/related.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ArticlePage,
    HeaderComponent,
    BodyComponent,
    ShareComponent,
    ArticleCommentsComponent,
    RelatedComponent
  ]
})
export class ArticlePageModule {}
