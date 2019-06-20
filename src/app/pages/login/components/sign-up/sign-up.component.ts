import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserResponse } from '@app/shared/interfaces/interfaces';
import { AuthService, StorageService } from '@app/core/services/services.index';
import { CrafterService } from '@app/shared/crafter/crafter.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { UserService } from '@core/services/user/user.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent implements OnInit, OnDestroy {

  signUpForm: FormGroup;
  namePattern = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';
  matchError = false;
  avatar: string;
  private unsubscribe$ = new Subject<void>();

  constructor(private auth: AuthService,
              private storage: StorageService,
              private nav: NavController,
              private craft: CrafterService,
              private _user: UserService) { }

  ngOnInit(): void {
    this.createSignUpForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private createSignUpForm(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [Validators.required,
                                   Validators.minLength(3),
                                   Validators.maxLength(20),
                                   Validators.pattern(this.namePattern)]),
     email: new FormControl(null, [Validators.required,
                                   Validators.email,
                                   Validators.minLength(5),
                                   Validators.maxLength(35)]),
  password: new FormControl(null, [Validators.required,
                                   Validators.minLength(5),
                                   Validators.maxLength(25)]),
   password2: new FormControl('', [Validators.required])
    }, { validators: this.theyMatchError('password', 'password2')});
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) { return; }
    const user: User = this.signUpForm.value;
    user.avatar = this.avatar;
    this.signUp(user);
  }

  private signUp(user: User): void {
    this.auth.signUp(user)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(async (res: UserResponse) => {
        if (res.ok) {
          this._user.setUser(res.user);
          await this.storage.setToken(res.token);
          this.storage.setId(res.user._id);
          this.nav.navigateRoot('/home');
          this.craft.alert('Welcome!');
        }
      }, (err: HttpErrorResponse) => {
        if (err.status === 0) {
          this.craft.alert('Login Error');
        } else {
          this.craft.alert('Email must be Unique');
          this.storage.clear();
          console.log(err);
        }
    });
  }

  private theyMatchError(one: string, two: string) {
    return (group: FormGroup) => {
      const p = group.controls[one].value;
      const m = group.controls[two].value;
      if (p === m) {
        this.matchError = false;
        return null;
      }
      this.matchError = true;
      return {
        error: true
      };
    };
  }

}

