import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '@app/core/services/article/article.service';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})

export class ArticlesPage implements OnInit, OnDestroy {

  articles: Article[] = [];
  main: Article[] = [];
  loading: boolean;
  private unsubscribe$ = new Subject<void>();

  constructor(private _article: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getArticles(): void {
    this.loading = true;
    this._article.getArticles()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.articles = res.articles;
          this.loader();
        }
    });
  }

  searchArticle(articles: Article[]): void {
    this.loading = true;
    this.articles = articles;
    this.loader();
  }

  changeCategory(value: string): void {
    this.loading = true;
    if (value === 'All') {
      this.getArticles();
      return;
    }

    this._article.getArticlesByCategory(value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.articles = res.articles;
          this.loader();
        }
      });
  }

  slideChanged(category: string): void {
    this.loading = true;
    this.changeCategory(category);
    this.loader();
  }

  private loader(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}
