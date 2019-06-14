import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ArticleService } from '@app/core/services/article/article.service';
import { ArticleResponse, Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.scss'],
})

export class ArticlesSearchComponent implements OnInit {

  @Output() search: EventEmitter<Article[]> = new EventEmitter<Article[]>();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {}

  searchArticles(e: any) {
    const value: string = e.target.value.toLowerCase();
    if (!value) { return; }
    this.articleService.searchArticles(value)
      .subscribe((res: ArticleResponse) => {
        if (res.ok) { this.search.emit(res.articles); }
      });
  }

}
