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
import { EmojiSelectorComponent } from './emoji-selector/emoji-selector.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { InputCommentComponent } from './input-comment/input-comment.component';
import { HelpComponent } from './help/help.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoaderComponent,
    PickAvatarComponent,
    PaginationComponent,
    EmojiSelectorComponent,
    InputCommentComponent,
    HelpComponent,
    ColorSelectorComponent
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
    EmojiSelectorComponent,
    InputCommentComponent,
    HelpComponent,
    ColorSelectorComponent
  ],
  entryComponents: [
    HelpComponent,
    EmojiSelectorComponent,
    InputCommentComponent,
    ColorSelectorComponent
  ]
})

export class ComponentsModule { }
