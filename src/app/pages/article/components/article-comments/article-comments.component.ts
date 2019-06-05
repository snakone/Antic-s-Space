import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article, Comment } from '@app/shared/interfaces/interfaces';
import { CommentService } from '@core/services/comment/comment.service';
import { CommentResponse } from '@shared/interfaces/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-comments',
  templateUrl: './article-comments.component.html',
  styleUrls: ['./article-comments.component.scss'],
})

export class ArticleCommentsComponent implements OnInit, OnDestroy {

  @Input() article: Article;
  page = 1;
  itemsPerPage = 3;
  comments: Comment[];
  subscription: Subscription;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.getComments();
    this.listenToComments();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getComments(): void {
    this.commentService.getCommentsByArticle(this.article._id)
      .subscribe((res: CommentResponse) => {
        if (res.ok) {
          this.comments = [];
          this.comments.unshift(...res.comments);
        }
    });
  }

  private listenToComments(): void {
    this.subscription = this.commentService.recieved
      .subscribe((res: boolean) => {
        if (res) {
          this.getComments();
        }
      });
  }

  swipe(event: any): void {
    if (event.deltaX < 0) {
      if (this.page === Math.ceil
        (this.comments.length / this.itemsPerPage)) { return; }
      this.changeFrom(this.page + 1);
    } else {
      if (this.page === 1) { return; }
      this.changeFrom(this.page - 1);
    }
  }

  changeFrom(value: number): void {
    const rows = document.getElementById('article-comments').classList;
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
