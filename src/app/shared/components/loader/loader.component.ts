import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})

export class LoaderComponent implements OnInit {

  version = '0.0.2-dev';

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.open()
      .then(() => {
        this.menu.close();
    });
  }

}
