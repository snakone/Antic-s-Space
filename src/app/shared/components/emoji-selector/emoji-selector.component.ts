import { Component, OnInit } from '@angular/core';
import { EMOJIS } from '@app/shared/shared.data';

@Component({
  selector: 'app-emoji-selector',
  templateUrl: './emoji-selector.component.html',
  styleUrls: ['./emoji-selector.component.scss'],
})
export class EmojiSelectorComponent implements OnInit {

  emojis = EMOJIS;

  constructor() { }

  ngOnInit() {}

}
