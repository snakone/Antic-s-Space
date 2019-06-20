import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '@core/services/article/article.service';
import { Article } from '@app/shared/interfaces/interfaces';
import { switchMap, map, takeUntil } from 'rxjs/operators';
import { ArticleResponse } from '@shared/interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ArticlePage implements OnInit, OnDestroy {

  article: Article;
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private _article: ArticleService,
              private nav: NavController) { }

  ngOnInit() {
    this.getArticle();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getArticle() {
    this.route.params
    .pipe(map((params: Params): string => params['slug']),
      switchMap((slug: string) => this._article.getArticleBySlug(slug)),
      takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.article = res.article[0];
          if (!this.article) { this.nav.navigateRoot('/home'); }
        }
    });
  }

}
