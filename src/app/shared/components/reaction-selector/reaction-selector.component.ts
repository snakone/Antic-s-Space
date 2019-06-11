import { Component, OnInit, Input } from '@angular/core';
import { REACTIONS } from '@app/shared/shared.data';
import { Article, User, Reaction, ReactionResponse } from '@app/shared/interfaces/interfaces';
import { ReactionService, UserService } from '@app/core/services/services.index';
import { NavParams } from '@ionic/angular';
import { CrafterService } from '@app/shared/crafter/crafter.service';

@Component({
  selector: 'app-reaction-selector',
  templateUrl: './reaction-selector.component.html',
  styleUrls: ['./reaction-selector.component.scss'],
})

export class ReactionSelectorComponent implements OnInit {

  reactions = REACTIONS;
  @Input() article: Article;

  constructor(private reactionService: ReactionService,
              private userService: UserService,
              private navParams: NavParams,
              private crafter: CrafterService) { }

  ngOnInit() {}

  doReact(title: string): void {
    const reaction: Reaction = {
      author: this.getUser().name,
      reaction: title,
      article: this.navParams.get('article'),
      user: this.getUser()
    };

    this.reactionService.addReaction(reaction)
    .subscribe((res: ReactionResponse) => {
      if (res.ok) {
        this.crafter.close();
        this.crafter.alert('reaction.recieved');
        this.reactionService.reactionRecieved();
      }
  });
  }

  private getUser(): User {
    return this.userService.getUser();
  }

}
