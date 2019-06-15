import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/core/services/article/article.service';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})

export class ArticlesPage implements OnInit {

  articles: Article[] = [];
  main: Article[] = [];
  loading: boolean;
  i = 0;

  constructor(private _article: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  private getArticles(): void {
    this.loading = true;
    this._article.getArticles()
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
    this.i = 0;
    this.loader();
  }

  changeCategory(value: string): void {
    this.loading = true;
    if (value === 'All') {
      this.getArticles();
      return;
    }

    this._article.getArticlesByCategory(value)
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.articles = res.articles;
          this.i = 0;
          this.loader();
        }
      });
  }

  slideChanged(index: number): void {
    this.loading = true;
    this.i = index;
    this.loader();
  }

  private loader(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}
