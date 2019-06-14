import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '@core/services/article/article.service';
import { Article } from '@app/shared/interfaces/interfaces';
import { switchMap, map } from 'rxjs/operators';
import { ArticleResponse } from '@shared/interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ArticlePage implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute,
              private _article: ArticleService,
              private nav: NavController) { }

  ngOnInit() {
    this.getArticle();
  }

  private getArticle() {
    this.route.params
    .pipe(map((params: Params): string => params['slug']),
     switchMap((slug: string) => this._article.getArticleBySlug(slug)))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.article = res.article[0];
          if (!this.article) { this.nav.navigateRoot('/home'); }
        }
    });
  }

}
