import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServceService} from "../../service/customer-servce.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";
import {Customer} from "../customer/customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerTypeList: CustomerType[];
  customerForm = new FormGroup({
    id: new FormControl(''),
    customerType: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    indentity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{6,9}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required])
  })
  customer: Customer;

  constructor(private customerService: CustomerServceService,
              private router: Router,
              private customertypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute) {
  }

  onSubmit() {
    const customer = this.customerForm.value;
    this.customertypeService.getById(this.customerForm.value.customerType).subscribe(
      value => {
        customer.customerType = value;
        this.customerService.updateCustomer(customer.id, customer).subscribe();
        this.customerForm.reset();
        this.router.navigate(['customer']);
      });

  }

  ngOnInit(): void {
    this.customertypeService.getAll().subscribe(value => this.customerTypeList = value);
    const id = this.activatedRoute.snapshot.params.id;
    this.customerService.findById(id).subscribe(
      value => {
        this.customer = value;
      },
      error => {
      },
      () => {
        this.customerForm.patchValue(this.customer);
        this.customerForm.patchValue({customerType: this.customer.customerType.id})
      }
    );

  }

}
