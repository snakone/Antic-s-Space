import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '@shared/shared.data';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss'],
})

export class SegmentsComponent implements OnInit {

  categories = CATEGORIES;

  constructor() { }

  ngOnInit() {}

  segmentChanged(event) {
  }

}
