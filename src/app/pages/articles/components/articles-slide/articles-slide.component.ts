import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-articles-slide',
  templateUrl: './articles-slide.component.html',
  styleUrls: ['./articles-slide.component.scss'],
})

export class ArticlesSlideComponent implements OnInit {

  @Input() articles: Article[];
  @ViewChild(IonSlides) slides: IonSlides;

  @HostListener('window:resize') onResize() {
    if (this.slides) { setTimeout(() => this.slides.update(), 100); }
  }

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(): void {
    this.onResize();
  }

  async slideChange(e) {
    const i = await this.slides.getActiveIndex();
  }



}
