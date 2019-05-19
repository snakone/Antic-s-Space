import { Component, OnInit, Input } from '@angular/core';
import { EMOJIS } from '@app/shared/shared.data';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-face-reaction',
  templateUrl: './face-reaction.component.html',
  styleUrls: ['./face-reaction.component.scss'],
})

export class FaceReactionComponent implements OnInit {

  @Input() article: Article;
  emojis = EMOJIS;

  constructor() { }

  ngOnInit() {}

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
