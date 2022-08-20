import { Component, OnInit } from '@angular/core';
import {Customer} from "./customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customerList: Customer[] =[
  {
    id: 'CU-0001',
    customerType: 'Diamond',
    name: 'Kim Hiếu',
    dateOfBirth: '1998-12-12',
    gender: 'Female',
    indentity: '3333.3333',
    phone: '0333.333.333',
    email: 'anhlavip.com',
    address: 'AMERICAN'
  },
  {
    id: 'CU-0002',
    customerType: 'Platinum',
    name: 'Thảo Uyên',
    dateOfBirth: '1998-08-12',
    gender: 'Male',
    indentity: '3333.3333',
    phone: '0333.000.333',
    email: 'anhlavip.com',
    address: 'JAPAN'
  },
  {
    id: 'CU-0003',
    customerType: 'Diamond',
    name: 'Hoàng Hảo',
    dateOfBirth: '1998-11-12',
    gender: 'Female',
    indentity: '1111.3333',
    phone: '0333.111.333',
    email: 'haongu.com',
    address: 'USA'
  },
  {
    id: 'CU-0004',
    customerType: 'Ruby',
    name: 'Hoàng Hảo',
    dateOfBirth: '1999-08-07',
    gender: 'Female',
    indentity: '8888.8888',
    phone: '0888.888.888',
    email: 'haongu.com',
    address: 'USA'
  }
]
  customerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    indentity: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{9}')]),
    phone: new FormControl('' , [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const  customer = this.customerForm.value;
    this.customerList.push(customer);
    this.customerForm.reset()
  }

  edit(customer: Customer) {
    this.customerForm.patchValue(customer)
  }

  update() {
    const customer = this.customerForm.value;
    console.log(customer)
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === customer.id) {
        this.customerList[i] = customer;
      }
    }
  }
}
