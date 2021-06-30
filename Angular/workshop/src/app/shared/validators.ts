import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function rePassMatchValidatorFactory(targetControl: AbstractControl): ValidatorFn {
    return function rePassMatchValidator(control: AbstractControl): ValidationErrors | null {
        const isMatch = targetControl.value === control.value;
        return isMatch ? null : { rePasswordValidator: true }
    }
}