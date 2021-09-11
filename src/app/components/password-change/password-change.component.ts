import { PasswordValidator } from './password.validators';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss'],
})
export class PasswordChangeComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          '',
          Validators.required,
          PasswordValidator.validatePassword,
        ],
        newPassword: ['', Validators.required],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: PasswordValidator.confirmPassword,
      }
    );
  }

  ngOnInit(): void {}
  get oldPassword(): AbstractControl | null {
    return this.form.get('oldPassword');
  }
  get newPassword(): AbstractControl | null {
    return this.form.get('newPassword');
  }
  get confirmPassword(): AbstractControl | null {
    return this.form.get('confirmPassword');
  }

  changePassword() {
    console.log(this.form.value);
  }
}
