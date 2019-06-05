import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { CATEGORIES } from '@app/shared/shared.data';
import { ArticleService } from '@core/services/article/article.service';
import { ArticleResponse, CommentResponse } from '@shared/interfaces/interfaces';
import { Router } from '@angular/router';
import { CommentService } from '@core/services/comment/comment.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})

export class LatestComponent implements OnInit {

  @Input() article: Article;
  @Output() selectCategory: EventEmitter<Article[]> = new EventEmitter<Article[]>();
  categories = CATEGORIES;
  total = 0;

  constructor(private articleService: ArticleService,
              private commentService: CommentService,
              private nav: NavController) { }

  ngOnInit() {
    this.getTotalComments();
   }

  search(event: CustomEvent): void {
    if (event.detail.value === 'All') {
      this.articleService.getArticles()
        .subscribe((res: ArticleResponse) => {
          if (res.ok) { this.selectCategory.emit(res.articles); }
      });
    } else {
      this.articleService.getArticlesByCategory(event.detail.value)
        .subscribe((res: ArticleResponse) => {
          if (res.ok) { this.selectCategory.emit(res.articles); }
      });
    }
  }

  goToArticle(id: string): void {
    this.nav.navigateForward('/article/' + id);
  }

  getTotalComments(): void {
    this.commentService.getCommentsByArticle(this.article._id)
      .subscribe((res: CommentResponse) => {
        if (res.ok) {
          this.total = res.comments.length;
      }
    });
  }

}
