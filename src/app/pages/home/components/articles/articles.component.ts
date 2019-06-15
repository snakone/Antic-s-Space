import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '@app/shared/interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})

export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];
  page = 1;
  itemsPerPage = 3;

  constructor(private nav: NavController) { }

  ngOnInit() {
    this.articles.shift();
  }

  goToArticle(slug: string): void {
    this.nav.navigateRoot('/article/' + slug);
  }

  swipe(event: any): void {
    if (event.deltaX < 0) {
      if (this.page === Math.ceil
        (this.articles.length / this.itemsPerPage)) { return; }
      this.changeFrom(this.page + 1);
    } else {
      if (this.page === 1) { return; }
      this.changeFrom(this.page - 1);
    }
  }

  changeFrom(value: number): void {
    const rows = document.getElementById('articles').classList;
    if (value - this.page >= 1) {
        rows.add('slideOutLeft');
        rows.remove('slideInRight', 'slideInLeft');
        setTimeout(() => {
          rows.remove('slideOutLeft');
          rows.add('slideInRight');
        }, 400);
    } else if (value - this.page <= -1) {
        rows.add('slideOutRight');
        rows.remove('slideInRight', 'slideInLeft');
        setTimeout(() => {
          rows.remove('slideOutRight');
          rows.add('slideInLeft');
        }, 400);
    }
    setTimeout(() => { this.page = value; }, 400);
}

}
