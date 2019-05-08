import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '@core/services/article/article.service';
import { Article, ArticleResponse } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})

export class ArticlesComponent implements OnInit {

  page = 1;
  articles: Article[] = [];
  itemsPerPage = 3;

  constructor(private router: Router,
              private _article: ArticleService) { }

  ngOnInit() {
    this.getArticles();
   }

  private getArticles(): void {
    this._article.getArticles()
      .subscribe((res: ArticleResponse) => {
        if (res.ok) { this.articles.push(...res.articles); }
      });
  }

  goToArticle(id: string): void {
    this.router.navigateByUrl('/article/' + id);
  }

  swipe(event: any): void {
    if (event.deltaX < 0) {
      if (this.page === Math.ceil
        (this.articles.length / this.itemsPerPage)) { return; }
      this.changeFrom(this.page + 1);
    } else {
      if (this.page === 1) { return; }
      this.changeFrom(this.page - 1);
    }
  }

  changeFrom(value: number): void {
    const rows = document.getElementById('rows').classList;
    if (value - this.page >= 1) {
        rows.add('slideOutLeft');
        rows.remove('slideInRight', 'slideInLeft');
        setTimeout(() => {
          rows.remove('slideOutLeft');
          rows.add('slideInRight');
        }, 500);
    } else if (value - this.page <= -1) {
        rows.add('slideOutRight');
        rows.remove('slideInRight', 'slideInLeft');
        setTimeout(() => {
          rows.remove('slideOutRight');
          rows.add('slideInLeft');
        }, 500);
    }
    setTimeout(() => { this.page = value; }, 500);
}

}
