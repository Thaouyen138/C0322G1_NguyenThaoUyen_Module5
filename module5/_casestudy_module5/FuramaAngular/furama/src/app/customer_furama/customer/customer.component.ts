import {Component, OnInit} from '@angular/core';
import {Customer} from "./customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServceService} from "../../service/customer-servce.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[];

  id: string;
  name: string;

  constructor(private customerService: CustomerServceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.customerService.getAll().subscribe(value => this.customerList = value);
  }

  openDelete(id: string, name: string){
    this.id = id;
    this.name = name;
  }

  delete(id: string){
    this.customerService.delete(id).subscribe();
    this.getAll();
  }
}
