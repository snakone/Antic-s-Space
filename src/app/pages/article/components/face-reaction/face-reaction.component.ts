import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { REACTIONS } from '@app/shared/shared.data';
import { Article, Reaction, ReactionResponse, Counter, Emoji } from '@app/shared/interfaces/interfaces';
import { ReactionService } from '@app/core/services/reaction/reaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-face-reaction',
  templateUrl: './face-reaction.component.html',
  styleUrls: ['./face-reaction.component.scss'],
})

export class FaceReactionComponent implements OnInit, OnDestroy {

  @Input() article: Article;
  emojis: Emoji[] = REACTIONS;
  reactions: Reaction[];
  counter: Counter;
  subscription: Subscription;

  constructor(private reactionService: ReactionService) { }

  ngOnInit() {
    this.getReactions();
    this.listenToReactions();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getReactions(): void {
    this.reactionService.getReactionsByArticle(this.article._id)
      .subscribe((res: ReactionResponse) => {
        if (res.ok) {
          this.reactions = [];
          this.reactions.unshift(...res.reactions);
          this.makeCounter(res.reactions);
        }
    });
  }

  private listenToReactions(): void {
    this.subscription = this.reactionService.recieved
      .subscribe((res: boolean) => {
        if (res) {
          this.getReactions();
        }
      });
  }

  private makeCounter(reactions: Reaction[]): void {
    this.counter = new Counter();
    reactions.forEach(x => {
      switch (x.reaction) {
        case 'Love': this.counter.love++; break;
        case 'Laugh': this.counter.laugh++; break;
        case 'Wow': this.counter.wow++; break;
        case 'Sad': this.counter.sad++; break;
        case 'Angry': this.counter.angry++; break;
      }
    });
    this.calculateHeight(this.counter);
  }

  private calculateHeight(counter: Counter): void {
    const total = counter.getTotal();
    this.emojis.forEach((x: Emoji) => {
      x.height = (counter[x.title.toLowerCase()] * 100) / total;
      if (!x.height) { x.height = 0; }
    });
  }

  heightToLow(height: string): boolean {
    return Number(height) <= 40 ? true : false;
  }

  heightToMedium(height: string): boolean {
    return Number(height) >= 40 && Number(height) <= 60 ? true : false;
  }

  heightToHigh(height: string): boolean {
    return Number(height) >= 60 ? true : false;
  }

}

