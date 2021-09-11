import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class PasswordValidator {
  constructor() {}
  static confirmPassword(ctrl: AbstractControl): ValidationErrors | null {
    const newPassword = ctrl.get('newPassword')?.value;
    const confirmPassword = ctrl.get('confirmPassword')?.value;
    if (newPassword !== confirmPassword) return { notSame: true };
    return null;
  }
  static validatePassword(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ctrl.value === '1234') resolve(null);
        else resolve({ notValid: true });
      }, 100);
    });
  }
}
