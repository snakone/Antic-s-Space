import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { SHARE } from '@app/shared/shared.data';
import { ReactionSelectorComponent } from '@app/shared/components/reaction-selector/reaction-selector.component';
import { InputCommentComponent } from '@app/shared/components/input-comment/input-comment.component';
import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@shared/crafter/crafter.service';

@Component({
  selector: 'app-article-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})

export class ShareComponent implements OnInit {

  @Input() article: Article;
  icons = SHARE;

  constructor(private _user: UserService,
              private crafter: CrafterService) { }

  ngOnInit() { }

  share(value: string): void {
    if (this._user.areYouGuest() && (value === 'reaction' || value === 'comment')) {
      this.crafter.alert('Only for Users with Account');
      return;
    }
    if (value === 'reaction') { this.openReactions(); }
    if (value === 'comment') { this.openComment(); }
  }

  private openComment(ev?: any): void {
    this.crafter.popOver(InputCommentComponent, { article: this.article});
  }

  private openReactions(ev?: any): void {
    this.crafter.popOver(ReactionSelectorComponent, { article: this.article});
  }

}
