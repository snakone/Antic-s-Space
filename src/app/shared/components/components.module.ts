import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { PickAvatarComponent } from './pick-avatar/pick-avatar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactionSelectorComponent } from './reaction-selector/reaction-selector.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { InputCommentComponent } from './input-comment/input-comment.component';
import { HelpComponent } from './help/help.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { FormsModule } from '@angular/forms';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SmallSliderComponent } from './small-slider/small-slider.component';
import { ArticleMakerComponent } from './article-maker/article-maker.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoaderComponent,
    PickAvatarComponent,
    PaginationComponent,
    ReactionSelectorComponent,
    InputCommentComponent,
    HelpComponent,
    ColorSelectorComponent,
    MainSliderComponent,
    SmallSliderComponent,
    ArticleMakerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoaderComponent,
    PickAvatarComponent,
    PaginationComponent,
    ReactionSelectorComponent,
    InputCommentComponent,
    HelpComponent,
    ColorSelectorComponent,
    MainSliderComponent,
    SmallSliderComponent,
    ArticleMakerComponent
  ],
  entryComponents: [
    HelpComponent,
    ReactionSelectorComponent,
    InputCommentComponent,
    ColorSelectorComponent
  ]
})

export class ComponentsModule { }
