import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '@app/core/services/services.index';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-related',
  templateUrl: './article-related.component.html',
  styleUrls: ['./article-related.component.scss'],
})

export class ArticleRelatedComponent implements OnInit {

  @Input() category: string;
  relateds: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getRelatedArticles();
  }

  private getRelatedArticles(): void {
    this.articleService.getArticlesByCategory(this.category)
      .subscribe((res: ArticleResponse) => {
        res.articles.shift();
        this.relateds.push(...res.articles);
    });
  }

}
