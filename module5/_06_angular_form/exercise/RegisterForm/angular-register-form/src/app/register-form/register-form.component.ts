import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  contactForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
      country: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required,Validators.min(18)]),
      gender: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    }
  );

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  checkConfirm(item: AbstractControl){
    const  pass = item.value.password;
    const confirm = item.value.confirmPassword;
    if (confirm != pass){
      return{confirmPass:true};
    }
    return null;
  }

}
