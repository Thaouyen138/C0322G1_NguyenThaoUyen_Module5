import {Injectable} from '@angular/core';
import {CustomerType} from "../model/customer-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.API_URL + 'customerTypeList');
  }

  getById(id: string): Observable<CustomerType> {
    return this.http.get<CustomerType>(this.API_URL + 'customerTypeList/' + id);
  }
}


