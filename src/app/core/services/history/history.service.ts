import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { APP_CONSTANTS } from '@app/app.config';
import { Observable } from 'rxjs';
import { HistoryResponse } from '@app/shared/interfaces/interfaces';

@Injectable()

export class HistoryService {

  readonly API_HISTORY = APP_CONSTANTS.END_POINT + 'history';

  constructor(private http: HttpService) { }

  public getHistoryByUser(id: string): Observable<HistoryResponse> {
    return this.http.get(this.API_HISTORY + '/' + id);
  }

}
