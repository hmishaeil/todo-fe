import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function mustMatchPassword(): ValidatorFn {
    return (control: AbstractControl) => {
      let isValid = false;
      if (control && control instanceof FormGroup) {
        let group = control as FormGroup;
        if (group.controls['passwordA'] && group.controls['passwordB']) {
          isValid = group.controls['passwordA'].value == group.controls['passwordB'].value;
        }
      }
      if (isValid) {
        return null;
      } else {
        return { 'matchPassword': 'failed' }
      }
    }
  }