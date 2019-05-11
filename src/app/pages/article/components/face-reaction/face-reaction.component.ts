import { Component, OnInit } from '@angular/core';
import { EMOJIS } from '@app/shared/shared.data';

@Component({
  selector: 'app-face-reaction',
  templateUrl: './face-reaction.component.html',
  styleUrls: ['./face-reaction.component.scss'],
})

export class FaceReactionComponent implements OnInit {

  emojis = EMOJIS;

  constructor() { }

  ngOnInit() {}

}
