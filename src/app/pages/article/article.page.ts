import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '@core/services/article/article.service';
import { Article } from '@app/shared/interfaces/interfaces';
import { switchMap, map } from 'rxjs/operators';
import { ArticleResponse } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})

export class ArticlePage implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute,
              private _article: ArticleService) { }

  ngOnInit() {
    this.getArticle();
  }

  private getArticle() {
    this.route.params
    .pipe(map((params: Params): string => params['id']),
     switchMap((id: string) => this._article.getArticleById(id)))
    .subscribe((res: ArticleResponse) => {
      if (res.ok) {
        this.article = res.article[0];
      }
    });
  }

}
