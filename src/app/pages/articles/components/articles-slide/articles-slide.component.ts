import { Component, OnInit, Input, ViewChild, HostListener, EventEmitter, Output } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { IonSlides, NavController } from '@ionic/angular';
import { articleSliderOpts } from '@shared/shared.data';

@Component({
  selector: 'app-articles-slide',
  templateUrl: './articles-slide.component.html',
  styleUrls: ['./articles-slide.component.scss'],
})

export class ArticlesSlideComponent implements OnInit {

  @Input() articles: Article[];
  @ViewChild(IonSlides) slides: IonSlides;
  @Output() slideChanged: EventEmitter<number> = new EventEmitter<number>();
  sliderOpts = articleSliderOpts;

  @HostListener('window:resize') onResize() {
    if (this.slides) { setTimeout(() => this.slides.update(), 100); }
  }

  constructor(private nav: NavController) { }

  ngOnInit() {}

  ionViewDidEnter(): void {
    this.onResize();
  }

  async slideChange(e) {
    const i = await this.slides.getActiveIndex();
    this.slideChanged.emit(i);
  }

  goToArticle(slug: string): void {
    this.nav.navigateBack('article/' + slug);
  }

}
