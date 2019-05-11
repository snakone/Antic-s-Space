import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { COMMENTS } from '@app/shared/shared.data';

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.scss'],
})

export class ArticleCommentsComponent implements OnInit {

  @Input() article: Article;
  page = 1;
  itemsPerPage = 3;
  reply = false;
  comments = COMMENTS;

  constructor() { }

  ngOnInit() {}

  changeFrom(value: number): void {
    const rows = document.getElementById('rows').classList;
    if (value - this.page >= 1) {
        rows.add('slideOutLeft');
        rows.remove('slideInRight', 'slideInLeft');
        setTimeout(() => {
          rows.remove('slideOutLeft');
          rows.add('slideInRight');
        }, 500);
    } else if (value - this.page <= -1) {
        rows.add('slideOutRight');
        rows.remove('slideInRight', 'slideInLeft');
        setTimeout(() => {
          rows.remove('slideOutRight');
          rows.add('slideInLeft');
        }, 500);
    }
    setTimeout(() => { this.page = value; }, 500);
}

}
