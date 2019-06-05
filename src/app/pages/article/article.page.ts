import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '@core/services/article/article.service';
import { Article } from '@app/shared/interfaces/interfaces';
import { switchMap, map } from 'rxjs/operators';
import { ArticleResponse } from '@shared/interfaces/interfaces';
import { NavController, Platform } from '@ionic/angular';
import { SCROLLBAR } from '@app/shared/shared.data';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})

export class ArticlePage implements OnInit {

  article: Article;
  scrollbar = false;

  constructor(private route: ActivatedRoute,
              private _article: ArticleService,
              private nav: NavController,
              private platform: Platform) { }

  ngOnInit() {
    this.getArticle();
  }

  ionViewWillEnter(): void {
    this.changeScrollBar();
  }

  private getArticle() {
    this.route.params
    .pipe(map((params: Params): string => params['id']),
     switchMap((id: string) => this._article.getArticleById(id)))
    .subscribe((res: ArticleResponse) => {
      if (res.ok) {
        this.article = res.article[0];
        if (!this.article) { this.nav.navigateRoot('/home'); }
      }
    });
  }

  private changeScrollBar(): void {
    if (!this.platform.is('mobileweb') && !this.platform.is('cordova')) {
      const content = document.getElementById('article');
      content.shadowRoot.innerHTML += SCROLLBAR;
    }
  }

}
