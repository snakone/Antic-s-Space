import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-footer',
  templateUrl: './article-footer.component.html',
  styleUrls: ['./article-footer.component.scss'],
})

export class ArticleFooterComponent implements OnInit {

  @Input() article: Article;
  header = 'comment';

  constructor() { }

  ngOnInit() {
  }

}
