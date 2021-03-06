import { Component, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { mainSliderOpts } from '@shared/shared.data';
import { Article } from '@app/shared/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})

export class MainSliderComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  @Input() articles: Article[];
  options = mainSliderOpts;

  constructor(private router: Router) { }

  ngOnInit() { }

  @HostListener('window:resize') onResize() {
    if (this.slides) { setTimeout(() => this.slides.update(), 100); }
  }

  ionViewDidEnter(): void {
    this.onResize();
  }

  goToArticle(id: string): void {
    this.router.navigateByUrl('/article/' + id);
  }

}
