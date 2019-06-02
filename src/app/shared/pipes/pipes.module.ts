import { NgModule } from '@angular/core';
import { AvatarPipe } from './avatar/avatar.pipe';
import { EmojiPipe } from './emoji/emoji.pipe';
import { PercentagePipe } from './percentage/percentage.pipe';
import { IconTypePipe } from './icon-type/icon-type.pipe';
import { IconColorPipe } from './icon-color/icon-color.pipe';
import { SanitizerPipe } from './sanitizer/sanitizer.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  declarations: [
    AvatarPipe,
    EmojiPipe,
    PercentagePipe,
    IconTypePipe,
    IconColorPipe,
    SanitizerPipe,
    TruncatePipe
  ],
  imports: [],
  exports: [
    AvatarPipe,
    EmojiPipe,
    PercentagePipe,
    IconTypePipe,
    IconColorPipe,
    SanitizerPipe,
    TruncatePipe
  ]
})

export class PipesModule { }
