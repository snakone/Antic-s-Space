import { Component, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { smallSliderOpts } from '@shared/shared.data';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-small-slider',
  templateUrl: './small-slider.component.html',
  styleUrls: ['./small-slider.component.scss'],
})

export class SmallSliderComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  @Input() articles: Article[];
  options = smallSliderOpts;

  constructor(private nav: NavController) { }

  ngOnInit() { }

  @HostListener('window:resize') onResize() {
    if (this.slides) { setTimeout(() => this.slides.update(), 100); }
  }

  ionViewDidEnter(): void {
    this.onResize();
  }

  goToArticle(slug: string): void {
    this.nav.navigateForward('/article/' + slug);
  }

}
