import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { User } from '@app/shared/interfaces/interfaces';
import { IonItemSliding, IonInput } from '@ionic/angular';
import { UserService } from '@app/core/services/user/user.service';
import { UserResponse } from '@shared/interfaces/interfaces';
import { StorageService } from '@app/core/storage/storage.service';
import { CrafterService } from '@app/shared/crafter/crafter.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})

export class ProfileInfoComponent implements OnInit {

  @Input() user: User;
  @ViewChild('slidingName') slidingName: IonItemSliding;
  @ViewChild('slidingEmail') slidingEmail: IonItemSliding;
  @ViewChild('name') name: IonInput;
  @ViewChild('email') email: IonInput;
  editingName = false;
  editingEmail = false;
  editUserForm: FormGroup;
  namePattern = '^[A-Za-z0-9 _]*[A-Za-z0-9][0-9A-Za-zÀ-ÿ][A-Za-z0-9 _]*$';

  constructor(private _user: UserService,
              private storage: StorageService,
              private crafter: CrafterService) { }

  ngOnInit() {
    this.createSignUpForm();
  }

  private createSignUpForm(): void {
    this.editUserForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required,
                                   Validators.minLength(3),
                                   Validators.maxLength(20),
                                   Validators.pattern(this.namePattern)]),
     email: new FormControl(this.user.email, [Validators.required,
                                   Validators.email,
                                   Validators.minLength(5),
                                   Validators.maxLength(35)])});
  }

  editName(): void {
    this.slidingName.close();
    this.editingName = true;
    setTimeout(() => {
      if (this.name) { this.name.setFocus(); }
    }, 1000);
  }

  editEmail(): void {
    this.slidingEmail.close();
    this.editingEmail = true;
    setTimeout(() => {
      if (this.email) { this.email.setFocus(); }
    }, 1000);
  }

  cancelEdit(value: string): void {
    if (value === 'name') { this.editingName = false; } else if
       (value === 'email') { this.editingEmail = false; }
  }
  updateUser(): void {
    if (this.editUserForm.invalid) { return; }
    this.user.name = this.editUserForm.value.name;
    this.user.email = this.editUserForm.value.email;
    this._user.updateUser(this.user)
      .subscribe((res: UserResponse) => {
        if (res.ok) {
          this.storage.setToken(res.token);
          this.editingName = false;
          this.editingEmail = false;
          this.crafter.alert('User updated!');
        } else {
          this.crafter.alert('error updating');
        }
    });
  }

}
