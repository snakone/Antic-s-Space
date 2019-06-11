import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-articles-slide',
  templateUrl: './articles-slide.component.html',
  styleUrls: ['./articles-slide.component.scss'],
})

export class ArticlesSlideComponent implements OnInit {

  @Input() articles: Article[];

  constructor() { }

  ngOnInit() {
    console.log(this.articles);
  }

}
