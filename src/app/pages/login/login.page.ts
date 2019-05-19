import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  slidesOpts = { effect: 'flip', zoom: false };
  index: number;

  constructor() { }

  ngOnInit() {
  }

  swipe(): void {
    this.slides.slideNext();
    this.slides.getActiveIndex().then(i => {
      this.index = i;
    });
  }

  goBack(): void {
    this.slides.slideTo(0);
    this.slides.getActiveIndex().then(i => {
      this.index = i;
    });
  }

}
