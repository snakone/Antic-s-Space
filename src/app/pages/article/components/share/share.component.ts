import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { SHARE } from '@app/shared/shared.data';

@Component({
  selector: 'app-article-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})

export class ShareComponent implements OnInit {

  @Input() article: Article;
  icons = SHARE;

  constructor() { }

  ngOnInit() { }

  share(site: string): void {
    console.log(site);
  }

}
