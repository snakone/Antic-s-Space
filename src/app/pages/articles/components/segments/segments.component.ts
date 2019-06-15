import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CATEGORIES } from '@shared/shared.data';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss'],
})

export class SegmentsComponent implements OnInit {

  categories = CATEGORIES;
  @Output() category: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  segmentChanged(event: any): void {
    this.category.emit(event.detail.value);
  }

  getArticles(value: string): void {
    if (value === 'All') {
      this.category.emit('All');
    } else { return; }
  }

}
