import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { SHARE } from '@app/shared/shared.data';
import { EmojiSelectorComponent } from '@app/shared/components/emoji-selector/emoji-selector.component';
import { PopoverController } from '@ionic/angular';
import { InputCommentComponent } from '@app/shared/components/input-comment/input-comment.component';

@Component({
  selector: 'app-article-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})

export class ShareComponent implements OnInit {

  @Input() article: Article;
  icons = SHARE;

  constructor(private pop: PopoverController) { }

  ngOnInit() { }

  share(value: string): void {
    if (value === 'emoji') { this.openEmojis(); }
    if (value === 'comment') { this.openComment(); }
  }

  async openEmojis(ev?: any): Promise<void> {
    const emojis = await this.pop.create({
      component: EmojiSelectorComponent,
      translucent: true
    });
    return await emojis.present();
  }

  async openComment(ev?: any): Promise<void> {
    const comment = await this.pop.create({
      component: InputCommentComponent,
      translucent: true
    });
    return await comment.present();
  }

}
