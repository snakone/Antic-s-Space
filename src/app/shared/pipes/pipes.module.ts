import { NgModule } from '@angular/core';
import { AvatarPipe } from './avatar/avatar.pipe';
import { EmojiPipe } from './emoji/emoji.pipe';
import { PercentagePipe } from './percentage/percentage.pipe';

@NgModule({
  declarations: [
    AvatarPipe,
    EmojiPipe,
    PercentagePipe
  ],
  imports: [],
  exports: [
    AvatarPipe,
    EmojiPipe,
    PercentagePipe
  ]
})

export class PipesModule { }
