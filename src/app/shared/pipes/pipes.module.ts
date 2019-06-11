import { NgModule } from '@angular/core';
import { AvatarPipe } from './avatar/avatar.pipe';
import { EmojiPipe } from './emoji/emoji.pipe';
import { PercentagePipe } from './percentage/percentage.pipe';
import { IconTypePipe } from './icon-type/icon-type.pipe';
import { IconColorPipe } from './icon-color/icon-color.pipe';
import { SanitizerPipe } from './sanitizer/sanitizer.pipe';
import { LangsPipe } from './langs/langs.pipe';

@NgModule({
  declarations: [
    AvatarPipe,
    EmojiPipe,
    PercentagePipe,
    IconTypePipe,
    IconColorPipe,
    SanitizerPipe,
    LangsPipe
  ],
  imports: [],
  exports: [
    AvatarPipe,
    EmojiPipe,
    PercentagePipe,
    IconTypePipe,
    IconColorPipe,
    SanitizerPipe,
    LangsPipe
  ]
})

export class PipesModule { }
