import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { NavParams } from '@ionic/angular';
import { User, Comment } from '@app/shared/interfaces/interfaces';
import { CommentService } from '@core/services/comment/comment.service';
import { CommentResponse } from '../../interfaces/interfaces';
import { CrafterService } from '../../crafter/crafter.service';

@Component({
  selector: 'app-input-comment',
  templateUrl: './input-comment.component.html',
  styleUrls: ['./input-comment.component.scss'],
})

export class InputCommentComponent implements OnInit {

  comment = '';

  constructor(private userService: UserService,
              private navParams: NavParams,
              private commentService: CommentService,
              private crafter: CrafterService) { }

  ngOnInit() {
  }

  addCommnent(): void {
    const comment: Comment = {
      author: this.getUser().name,
      comment: this.comment,
      article: this.navParams.get('article'),
      user: this.getUser()
    };

    this.commentService.addComment(comment)
      .subscribe((res: CommentResponse) => {
        if (res.ok) {
          this.crafter.close();
          this.crafter.alert('comment.recieved');
          this.commentService.commentRecieved();
        }
    });
  }

  private getUser(): User {
    return this.userService.getUser();
  }

}
