import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/core/services/article/article.service';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';
import { MAIN } from '@app/shared/shared.data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})

export class ArticlesPage implements OnInit {

  articles: Article[] = [];
  main: Article[] = [];

  constructor(private _article: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  private getArticles(): void {
    this._article.getArticles()
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          // this.getMainArticles(res.articles);
          this.articles = res.articles;
          // this.removeMainArticles();
        }
    });
  }

  changeCategory(value: string): void {
    if (value === 'All') {
      this.getArticles();
      return;
    }

    this._article.getArticlesByCategory(value)
      .subscribe((res: ArticleResponse) => {
        if (res.ok) { this.articles = res.articles; }
      });
  }

  // private getMainArticles(articles: Article[]): void {
  //   articles.map((x: Article) => {
  //     MAIN.forEach((id: string) => {
  //       if (x._id === id) { this.main.unshift(x); }
  //     });
  //   });
  // }

  // private removeMainArticles(): void {
  //   MAIN.forEach((id: string) => {
  //     this.articles = this.articles
  //       .filter((x: Article) => id !== x._id);
  //   });
  //   this.converted = true;
  // }

}
