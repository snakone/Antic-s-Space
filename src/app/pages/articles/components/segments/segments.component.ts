import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { CATEGORIES } from '@shared/shared.data';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss'],
})

export class SegmentsComponent implements OnInit {

  categories = CATEGORIES;
  @Output() category: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(IonSegment) ionSegment: IonSegment;

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
