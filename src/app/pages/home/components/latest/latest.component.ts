import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { CATEGORIES } from '@app/shared/shared.data';
import { ArticleService } from '@core/services/article/article.service';
import { ArticleResponse } from '@shared/interfaces/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})

export class LatestComponent implements OnInit {

  @Input() article: Article;
  @Output() selectCategory: EventEmitter<Article[]> = new EventEmitter<Article[]>();
  categories = CATEGORIES;

  constructor(private articleService: ArticleService,
              private router: Router) { }

  ngOnInit() { }

  search(event: CustomEvent): void {
    if (event.detail.value === 'All') {
      this.articleService.getArticles()
      .subscribe((res: ArticleResponse) => this.selectCategory.emit(res.articles));
    } else {
      this.articleService.getArticlesByCategory(event.detail.value)
      .subscribe((res: ArticleResponse) => this.selectCategory.emit(res.articles));
    }
  }

  goToArticle(id: string): void {
    this.router.navigateByUrl('/article/' + id);
  }

}
