import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '@app/core/services/services.index';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-related',
  templateUrl: './article-related.component.html',
  styleUrls: ['./article-related.component.scss'],
})

export class ArticleRelatedComponent implements OnInit {

  @Input() category: string;
  @Input() article: Article;
  relateds: Article[] = [];

  constructor(private articleService: ArticleService,
              private router: Router) { }

  ngOnInit() {
    this.getRelatedArticles();
  }

  private getRelatedArticles(): void {
    this.articleService.getArticlesByCategory(this.category)
      .subscribe((res: ArticleResponse) => {
        res.articles.map((x: Article) => {
          if (x._id !== this.article._id) {
            this.relateds.push(x);
          }
        });
    });
  }

  goToRelatedArticle(id: string): void {
    this.router.navigateByUrl('/article/' + id);
  }

}
