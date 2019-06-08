import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';
import { UserService } from '@core/services/user/user.service';
import { HistoryService } from '@app/core/services/history/history.service';
import { History, HistoryResponse } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrls: ['./profile-history.component.scss'],
})

export class ProfileHistoryComponent implements OnInit {

  @Input() user: User;
  @Input() history: History[];
  page = 1;
  itemsPerPage = 4;

  constructor() { }

  ngOnInit() {}

  swipe(event: any): void {
    if (event.deltaX < 0) {
      if (this.page === Math.ceil
        (this.history.length / this.itemsPerPage)) { return; }
      this.changeFrom(this.page + 1);
    } else {
      if (this.page === 1) { return; }
      this.changeFrom(this.page - 1);
    }
  }

  changeFrom(value: number): void {
    const rows = document.getElementById('history-items').classList;
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
