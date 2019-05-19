import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, MenuController } from '@ionic/angular';
import { AuthService } from '@core/services/auth/auth.service';
import { UserResponse, User } from '@app/shared/interfaces/interfaces';
import { UserService } from '@app/core/services/services.index';
import { StorageService } from '@core/storage/storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CrafterService } from '@shared/crafter/crafter.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit, OnDestroy {

  @Output() signUp: EventEmitter<boolean> = new EventEmitter<boolean>();
  signInForm: FormGroup;
  remember = false;
  user: User;

  constructor(private nav: NavController,
              private _user: UserService,
              private auth: AuthService,
              private storage: StorageService,
              private crafter: CrafterService,
              private menu: MenuController) { }

  ngOnInit() {
    this.disableMenu(true);
    this.getUser();
    this.createSignUpForm();
    this.rememberMe();
  }

  private createSignUpForm(): void {
    this.signInForm = new FormGroup({
       email: new FormControl(null, [Validators.required,
                                     Validators.email,
                                     Validators.minLength(5),
                                     Validators.maxLength(35)]),
    password: new FormControl(null, [Validators.required,
                                     Validators.minLength(5),
                                     Validators.maxLength(25)])});
  }

  onSubmit(): void {
    if (this.signInForm.invalid) { return; }
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    this.signIn(email, password);
  }

  private disableMenu(value: boolean): void {
    this.menu.get().then((menu: HTMLIonMenuElement) => {
      value ? menu.swipeGesture = false :
      menu.swipeGesture = true;
    });
  }

  private getUser(): void {
    this.user = this._user.getUser();
  }

  private signIn(e: string, p: string): void {
    this.auth.signIn(e, p)
      .subscribe(async (res: UserResponse) => {
        if (res.ok) {
          this._user.setUser(res.user);
          await this.storage.setToken(res.token);
          this.storage.setId(res.user._id);
          this.storage.save('remember', this.remember);
          this.nav.navigateRoot('/home');
        }
      }, (err: HttpErrorResponse) => {
          if (err.status === 0) {
            this.crafter.alert('Login Error');
          } else {
            this.crafter.alert('Invalid Login');
            this.storage.clear();
            console.log(err);
          }
      });
  }

  goToSignUp(): void {
    this.signUp.emit(true);
  }

  async enterAsGuest() {
    await this.storage.reset();
    this._user.setGuest();
    this.nav.navigateRoot('/home');
  }

  private rememberMe(): void {
    if (this.storage.getRemember() && this.storage.getId()) {
      this._user.getUserById(this.storage.getId())
        .subscribe((res: UserResponse) => {
          this.remember = true;
          this.user = res.user;
          this.signInForm.controls.email.setValue(res.user.email);
        }, (err) => {
            console.log(err);
        });
    }
  }

  ngOnDestroy(): void {
    this.disableMenu(false);
  }

}
