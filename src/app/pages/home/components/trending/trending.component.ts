import { Component, OnInit } from '@angular/core';
import { TENDENCIES } from '@app/shared/shared.data';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})

export class TrendingComponent implements OnInit {

  tendencies = TENDENCIES;
  random: string;

  constructor() { }

  ngOnInit() {
    this.random = this.getRandom();
  }

  getRandom(): string {
    const random = Math.floor(Math.random() * this.tendencies.length);
    return this.tendencies[random];
  }

}
