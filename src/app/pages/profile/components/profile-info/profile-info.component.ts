import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})

export class ProfileInfoComponent implements OnInit {

  @Input() user: User;
  @ViewChild('sliding') IonItemSliding: IonItemSliding;

  constructor() { }

  ngOnInit() {}

  editName(): void {
    this.IonItemSliding.closeOpened();
  }

  editEmail(): void {
    this.IonItemSliding.closeOpened();
  }

}
