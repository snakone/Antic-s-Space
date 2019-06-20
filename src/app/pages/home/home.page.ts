import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '@app/core/services/article/article.service';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';
import { MAIN, SECONDARY } from '@app/shared/shared.data';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, OnDestroy {

  articles: Article[] = [];
  latest: Article;
  main: Article[] = [];
  secondary: Article[] = [];
  refresh = true;
  private unsubscribe$ = new Subject<void>();

  constructor(private _article: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getArticles(): void {
    this.articles = [];
    this._article.getArticles()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.getMainArticles(res.articles);
          this.getSecondaryArticles(res.articles);
          this.latest = res.articles[0];
          res.articles.shift();
          this.articles.push(...res.articles);
        }
    });
  }

  doRefresh(event: any): void {
    this.refresh = false;
    this.resetArticles();
    this.getArticles();
    setTimeout(() => {
      this.refresh = true;
      event.target.complete();
    }, 1000);
  }

  private getMainArticles(articles: Article[]): void {
    articles.map((x: Article) => {
      MAIN.forEach((id: string) => {
        if (x._id === id) { this.main.unshift(x); }
      });
    });
  }

  private getSecondaryArticles(articles: Article[]): void {
    articles.map((x: Article) => {
      SECONDARY.forEach((id: string) => {
        if (x._id === id) { this.secondary.unshift(x); }
      });
    });
  }

  changeCategory(articles: Article[]): void {
    if (articles.length === 0) {
      this.latest = {};
      this.articles = [];
      return;
    }
    this.latest = articles[0];
    articles.shift();
    this.articles = articles;
  }

  private resetArticles(): void {
    this.articles = [];
    this.latest = {};
    this.main = [];
    this.secondary = [];
  }

}
