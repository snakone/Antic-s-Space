import { Component, OnInit } from '@angular/core';
import { MENU } from '@app/shared/shared.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  menu = MENU;

  constructor() { }

  ngOnInit() {}

}
