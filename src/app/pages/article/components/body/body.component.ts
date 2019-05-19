import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})

export class BodyComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {}

}
