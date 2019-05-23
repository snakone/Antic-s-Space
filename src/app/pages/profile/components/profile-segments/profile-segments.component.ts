import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-segments',
  templateUrl: './profile-segments.component.html',
  styleUrls: ['./profile-segments.component.scss'],
})

export class ProfileSegmentsComponent implements OnInit {

  @Output() segment: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  segmentChanged(event: CustomEvent): void {
    this.segment.emit(event.detail.value);
  }

}
