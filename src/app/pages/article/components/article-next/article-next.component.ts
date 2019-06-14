import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '@core/services/article/article.service';
import { Article, NextPrevResponse } from '@app/shared/interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-article-next',
  templateUrl: './article-next.component.html',
  styleUrls: ['./article-next.component.scss'],
})

export class ArticleNextComponent implements OnInit {

  @Input() article: Article;
  prev: Article;
  next: Article;

  constructor(private articleService: ArticleService,
              private nav: NavController) { }

  ngOnInit() {
    this.getNextPrev();
  }

  getNextPrev(): void {
    this.articleService.getNextPrev(this.article._id)
      .subscribe((res: NextPrevResponse) => {
        if (res.ok) {
          this.prev = res.prev[0];
          this.next = res.next[0];
        }
    });
  }

  goNext(slug: string) {
    this.nav.navigateForward('/article/' + slug);
  }

}
