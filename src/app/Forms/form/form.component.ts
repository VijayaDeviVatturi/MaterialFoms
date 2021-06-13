import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PasswordStrengthValidator, UserNameValidator } from 'src/app/password-strength.validators'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  maxDate: Date;
  form;
  userService: any;
  
  showMsg: boolean = false;
  constructor(private router: Router) { 
    let date = new Date();
    const currentYear = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate()
    //this.minDate = new Date(currentYear - 0, 6, 11);
    // debugger
    this.maxDate = new Date(currentYear - 18, month, day);
  }

  
  ngOnInit() {
    this.form=new FormGroup({
      usernameControl : new FormControl('', [
        Validators.required,
        UserNameValidator
      ])
      ,
      emailFormControl : new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      passwordControl : new FormControl('', [
        Validators.required,
        PasswordStrengthValidator,
      ]),
      dob : new FormControl('', [
        Validators.required,
        
      ])
    });
  }

  submit(){
console.log(this.form)
  }

  get formControl() {
    return this.form.controls;
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

  matcher = new MyErrorStateMatcher();

  public static noSpecialChar(control: FormControl) {
    let hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(control.value);
    if(hasSpecial){
      return { noSpecial: 'Special char' };
    }
    return null;
  }

  onSubmit=function(user){
    console.log(user);
    // this.userService.createUser(this.form.value)
    // .subscribe( data => {
      this.router.navigate(['/submit']);
      this.showMsg= true;
    // });
  }
  
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}