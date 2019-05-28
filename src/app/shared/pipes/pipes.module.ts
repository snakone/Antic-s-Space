import { NgModule } from '@angular/core';
import { AvatarPipe } from './avatar/avatar.pipe';
import { EmojiPipe } from './emoji/emoji.pipe';
import { PercentagePipe } from './percentage/percentage.pipe';
import { IconTypePipe } from './icon-type/icon-type.pipe';
import { IconColorPipe } from './icon-color/icon-color.pipe';
import { HtmlSanitizerPipe } from './html-sanitizer/html-sanitizer.pipe';

@NgModule({
  declarations: [
    AvatarPipe,
    EmojiPipe,
    PercentagePipe,
    IconTypePipe,
    IconColorPipe,
    HtmlSanitizerPipe
  ],
  imports: [],
  exports: [
    AvatarPipe,
    EmojiPipe,
    PercentagePipe,
    IconTypePipe,
    IconColorPipe
  ]
})

export class PipesModule { }
