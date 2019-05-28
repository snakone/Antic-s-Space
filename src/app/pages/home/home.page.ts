import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/core/services/article/article.service';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  articles: Article[] = [];
  refresh = true;

  constructor(private _article: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(): void {
    this._article.getArticles()
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.articles.push(...res.articles);
        }
    });
  }

  doRefresh(event): void {
    console.log(event.target);
    this.refresh = false;
    this.articles = [];
    this.getArticles();
    setTimeout(() => {
      this.refresh = true;
      event.target.complete();
    }, 1000);
  }

}
