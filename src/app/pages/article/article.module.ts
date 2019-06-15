import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { ArticlePage } from './article.page';
import { ArticleHeaderComponent } from './components/article-header/article-header.component';
import { ArticleBodyComponent } from './components/article-body/article-body.component';
import { ArticleShareComponent } from './components/article-share/article-share.component';
import { ArticleFooterComponent } from './components/article-footer/article-footer.component';
import { ArticleCommentsComponent } from './components/article-comments/article-comments.component';
import { ArticleRelatedComponent } from './components/article-related/article-related.component';
import { ArticleNextComponent } from './components/article-next/article-next.component';
import { ArticleLegendComponent } from './components/article-legend/article-legend.component';
import { FaceReactionComponent } from './components/face-reaction/face-reaction.component';

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
    ComponentsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ArticlePage,
    ArticleHeaderComponent,
    ArticleBodyComponent,
    ArticleShareComponent,
    ArticleFooterComponent,
    ArticleCommentsComponent,
    ArticleRelatedComponent,
    ArticleNextComponent,
    ArticleLegendComponent,
    ArticleRelatedComponent,
    FaceReactionComponent
  ],
  entryComponents: []
})

export class ArticlePageModule {}
