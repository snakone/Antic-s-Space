import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})

export class PaginationComponent implements OnInit {

  @Input() id: string;
  @Output() index: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  changeFrom(e: number): void {
    this.index.emit(e);
  }

}
