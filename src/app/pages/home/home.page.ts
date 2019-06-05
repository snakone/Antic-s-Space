import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticleService } from '@app/core/services/article/article.service';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';
import { MAIN } from '@app/shared/shared.data';
import { SCROLLBAR } from '../../shared/shared.data';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  articles: Article[] = [];
  main: Article[] = [];
  latest: Article;

  refresh = true;
  scrollbar = false;

  constructor(private _article: ArticleService,
              private platform: Platform) {}

  ngOnInit(): void {
    this.getArticles();
  }

  ionViewWillEnter(): void {
    this.changeScrollBar();
  }

  private getArticles(): void {
    this._article.getArticles()
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.getMainArticles(res.articles);
          this.latest = res.articles[0];
          res.articles.shift();
          this.articles.push(...res.articles);
        }
    });
  }

  doRefresh(event: any): void {
    this.refresh = false;
    this.articles = [];
    this.getArticles();
    setTimeout(() => {
      this.refresh = true;
      event.target.complete();
    }, 1000);
  }

  private getMainArticles(articles: Article[]) {
    articles.map(x => {
      MAIN.forEach((id) => {
        if (x._id === id) {
          this.main.unshift(x);
        }
      });
    });
  }

  changeCategory(articles: Article[]) {
    if (articles.length === 0) {
      this.latest = {};
      this.articles = [];
      return;
    }
    this.latest = articles[0];
    articles.shift();
    this.articles = articles;
  }

  changeScrollBar(): void {
    if (!this.platform.is('mobileweb') && !this.platform.is('cordova')) {
      const content = document.getElementById('home');
      content.shadowRoot.innerHTML += SCROLLBAR;
    }
  }

}
