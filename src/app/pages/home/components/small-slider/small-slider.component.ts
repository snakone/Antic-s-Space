import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { smallSliderOpts } from '@shared/shared.data';

@Component({
  selector: 'app-small-slider',
  templateUrl: './small-slider.component.html',
  styleUrls: ['./small-slider.component.scss'],
})

export class SmallSliderComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  options = smallSliderOpts;

  constructor() { }

  ngOnInit() { }

  @HostListener('window:resize') onResize() {
    if (this.slides) { setTimeout(() => this.slides.update(), 100); }
  }

  ionViewDidEnter(): void {
    this.onResize();
  }

}
