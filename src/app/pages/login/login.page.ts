import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { CrafterService } from '@shared/crafter/crafter.service';
import { HelpComponent } from '@app/shared/components/help/help.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  slidesOpts = { effect: 'flip', zoom: false };
  index: number;

  @HostListener('window:resize') onResize() {
    if (this.slides) { setTimeout(() => this.slides.update(), 100); }
  }

  constructor(private crafter: CrafterService) { }

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

  async openHelp(): Promise<void> {
    await this.crafter.popOver(HelpComponent);
  }

}
