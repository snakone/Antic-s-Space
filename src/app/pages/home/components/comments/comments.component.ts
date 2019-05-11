import { Component, OnInit } from '@angular/core';
import { COMMENTS } from '@app/shared/shared.data';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})

export class CommentsComponent implements OnInit {

  page = 1;
  itemsPerPage = 3;
  // placeholder
  comments = COMMENTS;

  constructor() { }

  ngOnInit() {}

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
    const rows = document.getElementById('comments').classList;
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
