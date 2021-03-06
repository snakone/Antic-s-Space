import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
})

export class ArticleHeaderComponent implements OnInit {

  @Input() article: Article;

  constructor(private nav: NavController) { }

  ngOnInit() {}

  goBack(): void {
    this.nav.navigateBack('/');
  }

}
