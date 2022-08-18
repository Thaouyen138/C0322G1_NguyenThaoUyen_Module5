import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  genderList = [
    {id: 1, name: 'Female'},
    {id: 2, name: 'Male'},
    {id: 0, name: 'Orther'},
  ];
  contactForm = new FormGroup({
      name : new FormControl(),
      password : new FormControl(),
      confirmPassword : new FormControl(),
      country : new FormControl(),
      age : new FormControl(),
      gender : new FormControl(),
      phone : new FormControl(),
    }
  );
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
