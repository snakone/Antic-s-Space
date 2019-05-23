import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})

export class ProfileHeaderComponent implements OnInit {

  @Input() user: User;
  @Output() segment: EventEmitter<string> = new EventEmitter<string>();

  constructor(private nav: NavController) { }

  ngOnInit() {}

  goBack(): void {
    this.nav.navigateBack('/');
  }

  segmentChanged(event: CustomEvent): void {
    this.segment.emit(event.detail.value);
  }

}
