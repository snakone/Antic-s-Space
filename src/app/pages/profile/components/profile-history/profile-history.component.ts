import { Component, OnInit, Input } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrls: ['./profile-history.component.scss'],
})

export class ProfileHistoryComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {}

}
