import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { PopoverController } from '@ionic/angular';
import { EmojiSelectorComponent } from '../../../../shared/components/emoji-selector/emoji-selector.component';

@Component({
  selector: 'app-article-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss'],
})

export class ReactionComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {}

}
