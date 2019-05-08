import { Component, OnInit } from '@angular/core';
import { SOCIAL } from '@app/shared/shared.data';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
})

export class ConnectComponent implements OnInit {

  social = SOCIAL;

  constructor() { }

  ngOnInit() {}

}
