import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArticlePage } from './article.page';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { ShareComponent } from './components/share/share.component';
import { ArticleFooterComponent } from './components/article-footer/article-footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RelatedComponent } from './components/related/related.component';
import { ReactionComponent } from './components/reaction/reaction.component';
import { ComponentsModule } from '@app/shared/components/components.module';
import { FaceReactionComponent } from './components/face-reaction/face-reaction.component';
import { SharedModule } from '@app/shared/shared.module';
import { ReplyComponent } from './components/reply/reply.component';
import { EmojiSelectorComponent } from '@app/shared/components/emoji-selector/emoji-selector.component';
import { ArticleCommentsComponent } from './components/article-comments/article-comments.component';
import { LegendComponent } from './components/legend/legend.component';
import { InputCommentComponent } from '@app/shared/components/input-comment/input-comment.component';

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
    RelatedComponent,
    ReactionComponent,
    FaceReactionComponent,
    ReplyComponent,
    ArticleCommentsComponent,
    LegendComponent
  ],
  entryComponents: [
    EmojiSelectorComponent,
    InputCommentComponent
  ]
})
export class ArticlePageModule {}
