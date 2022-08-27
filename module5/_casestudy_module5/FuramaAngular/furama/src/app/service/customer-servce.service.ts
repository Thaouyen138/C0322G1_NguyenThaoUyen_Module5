import {Injectable} from '@angular/core';
import {Customer} from "../customer_furama/customer/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerServceService {
  API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + "customerList");
  }

  saveCustomer(customer: Customer): Observable<void> {
    return this.http.post<void>(this.API_URL + "customerList", customer);
  }

  findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + "customerList/" + id);
  }

  updateCustomer(id: string, customer: Customer): Observable<void> {
    console.log(customer)
    return this.http.patch<void>(this.API_URL + 'customerList/' + id, customer);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.API_URL + "customerList/" + id);
  }
}
