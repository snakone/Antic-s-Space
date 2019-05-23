import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.scss'],
})

export class ArticleBodyComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {}

}
