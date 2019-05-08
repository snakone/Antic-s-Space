import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-article-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss'],
})

export class RelatedComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {}

}
