import { Component, OnInit, Input, ViewChild, HostListener, EventEmitter, Output } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { IonSlides } from '@ionic/angular';
import { articleSliderOpts, CATEGORYSLIDES } from '@shared/shared.data';

@Component({
  selector: 'app-articles-slide',
  templateUrl: './articles-slide.component.html',
  styleUrls: ['./articles-slide.component.scss'],
})

export class ArticlesSlideComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  @Output() slideChanged: EventEmitter<string> = new EventEmitter<string>();
  sliderOpts = articleSliderOpts;
  categories = CATEGORYSLIDES;

  @HostListener('window:resize') onResize() {
    if (this.slides) { setTimeout(() => this.slides.update(), 100); }
  }

  constructor() { }

  ngOnInit() {}

  ionViewDidEnter(): void {
    this.onResize();
  }

  async slideChange(e) {
    const i = await this.slides.getActiveIndex();
    this.slideChanged.emit(this.categories[i].category);
  }

}
