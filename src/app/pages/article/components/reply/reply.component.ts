import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss'],
})

export class ReplyComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {}

}
