import { Injectable, EventEmitter } from '@angular/core';
import { Reaction, ReactionResponse, Article } from '@app/shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { APP_CONSTANTS } from '@app/app.config';

@Injectable()

export class ReactionService {

  readonly API_REACTIONS = APP_CONSTANTS.END_POINT + 'reactions';
  recieved: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpService) {
    console.log('ReactionService');
  }

  public getReactionsByArticle(id: string): Observable<ReactionResponse> {
    return this.http.get(this.API_REACTIONS + '/' + id);
  }

  public addReaction(reaction: Reaction): Observable<ReactionResponse> {
    return this.http.post(this.API_REACTIONS, reaction);
  }

  reactionRecieved(): void {
    this.recieved.emit(true);
  }
}
