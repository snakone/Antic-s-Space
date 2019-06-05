import { Injectable, EventEmitter } from '@angular/core';
import { Comment, CommentResponse } from '@app/shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { APP_CONSTANTS } from '@app/app.config';

@Injectable()

export class CommentService {

  readonly API_COMMENTS = APP_CONSTANTS.END_POINT + 'comments';
  recieved: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpService) {
    console.log('CommentService');
  }

  public getCommentsByArticle(id: string): Observable<CommentResponse> {
    return this.http.get(this.API_COMMENTS + '/' + id);
  }

  public addComment(comment: Comment): Observable<CommentResponse> {
    return this.http.post(this.API_COMMENTS, comment);
  }

  commentRecieved(): void {
    this.recieved.emit(true);
  }
}
