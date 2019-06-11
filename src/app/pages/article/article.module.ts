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
import { ShareComponent } from './components/share/share.component';
import { ArticleFooterComponent } from './components/article-footer/article-footer.component';
import { FaceReactionComponent } from './components/face-reaction/face-reaction.component';
import { ArticleCommentsComponent } from './components/article-comments/article-comments.component';
import { LegendComponent } from './components/legend/legend.component';
import { ArticleMakerComponent } from '@shared/components/article-maker/article-maker.component';
import { ArticleRelatedComponent } from './components/article-related/article-related.component';
import { ArticleNextComponent } from './components/article-next/article-next.component';

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
    ShareComponent,
    ArticleFooterComponent,
    FaceReactionComponent,
    ArticleCommentsComponent,
    LegendComponent,
    ArticleMakerComponent,
    ArticleRelatedComponent,
    ArticleNextComponent
  ],
  entryComponents: []
})

export class ArticlePageModule {}
