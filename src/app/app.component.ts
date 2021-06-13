import { Component } from '@angular/core';
// import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material';
// import { PasswordStrengthValidator, UserNameValidator } from './password-strength.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datepicker';

  // minDate: Date;
  // maxDate: Date;
  constructor() {
    // let date = new Date();
    // const currentYear = date.getFullYear();
    // const month = date.getMonth();
    // const day = date.getDate()
    // //this.minDate = new Date(currentYear - 0, 6, 11);
    // // debugger
    // this.maxDate = new Date(currentYear - 18, month, day);
  }
  // usernameControl = new FormControl('', [
  //   Validators.required,
  //   UserNameValidator
  // ]);

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // passwordControl = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(6),
  //   PasswordStrengthValidator,
  // ]);

  // matcher = new MyErrorStateMatcher();

  // public static noSpecialChar(control: FormControl) {
  //   let hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(control.value);
  //   if(hasSpecial){
  //     return { noSpecial: 'Special char' };
  //   }
  //   return null;
  // }
  // public static strong(control: FormControl) {
  //   let hasNumber = /\d/.test(control.value);
  //   let hasUpper = /[A-Z]/.test(control.value);
  //   let hasLower = /[a-z]/.test(control.value);
  //   let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  //   // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
  //   const valid = hasNumber && hasUpper && hasLower && specialCharacters;
  //   if (!valid) {
  //     // return what´s not valid
  //     return { strong: true };
  //   }
  //   return null;
  // }

}

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

