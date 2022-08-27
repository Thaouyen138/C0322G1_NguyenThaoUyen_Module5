import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {CustomerServceService} from "../../service/customer-servce.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer-type.service";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

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

  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerServceService,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypeList = value;
    })
  }

  onSubmit() {
    const customer = this.customerForm.value;
    this.customerTypeService.getById(this.customerForm.value.customerType).subscribe(
      value => {
        customer.customerType = value;
        this.customerService.saveCustomer(customer).subscribe();
        this.customerForm.reset();
        this.router.navigate(['customer']);
      }

  )
    ;

    // this.router.navigateByUrl('/customer');
  }
}
