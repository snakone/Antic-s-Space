import { Injectable } from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { ArticleResponse } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable()

export class ArticleService {

  public page = 0;
  readonly API_ARTICLES = APP_CONSTANTS.END_POINT + 'articles';

  constructor(private http: HttpService) {
    console.log('ArticleService');
  }

  public getArticles(): Observable<ArticleResponse> {
    this.page++;
    return this.http.get(this.API_ARTICLES + '?page=' + this.page);
  }

  public getArticleById(id: string): Observable<ArticleResponse> {
    return this.http.get(this.API_ARTICLES + '/' + id);
  }

  public resetPage(): void {
    this.page = 0;
  }
}
