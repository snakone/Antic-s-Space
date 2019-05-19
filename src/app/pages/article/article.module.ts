import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';
import { InputCommentComponent } from '@app/shared/components/input-comment/input-comment.component';
import { EmojiSelectorComponent } from '@app/shared/components/emoji-selector/emoji-selector.component';

import { ArticlePage } from './article.page';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { ShareComponent } from './components/share/share.component';
import { ArticleFooterComponent } from './components/article-footer/article-footer.component';
import { FaceReactionComponent } from './components/face-reaction/face-reaction.component';
import { ArticleCommentsComponent } from './components/article-comments/article-comments.component';
import { LegendComponent } from './components/legend/legend.component';
import { ArticleMakerComponent } from '../../shared/components/article-maker/article-maker.component';

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
    HeaderComponent,
    BodyComponent,
    ShareComponent,
    ArticleFooterComponent,
    FaceReactionComponent,
    ArticleCommentsComponent,
    LegendComponent,
    ArticleMakerComponent
  ],
  entryComponents: [
    EmojiSelectorComponent,
    InputCommentComponent
  ]
})
export class ArticlePageModule {}
