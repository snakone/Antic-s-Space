import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { mainSliderOpts } from '@shared/shared.data';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})

export class MainSliderComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  options = mainSliderOpts;

  constructor() { }

  ngOnInit() { }

  @HostListener('window:resize') onResize() {
    if (this.slides) { setTimeout(() => this.slides.update(), 100); }
  }

  ionViewDidEnter(): void {
    this.onResize();
  }

}
