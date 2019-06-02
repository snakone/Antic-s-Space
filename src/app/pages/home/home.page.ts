import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/core/services/article/article.service';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';
import { MAIN } from '@app/shared/shared.data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  articles: Article[] = [];
  refresh = true;
  main: Article[] = [];
  latest: Article;

  constructor(private _article: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(): void {
    this._article.getArticles()
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.getMainArticles(res.articles);
          this.latest = res.articles[0];
          res.articles.shift();
          this.articles.push(...res.articles);
        }
    });
  }

  doRefresh(event: any): void {
    this.refresh = false;
    this.articles = [];
    this.getArticles();
    setTimeout(() => {
      this.refresh = true;
      event.target.complete();
    }, 1000);
  }

  private getMainArticles(articles: Article[]) {
    articles.map(x => {
      MAIN.forEach((id) => {
        if (x._id === id) {
          this.main.unshift(x);
        }
      });
    });
  }

  changeCategory(articles: Article[]) {
    this.latest = articles[0];
    articles.shift();
    this.articles = articles;
  }

}
