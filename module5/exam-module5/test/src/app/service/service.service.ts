import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URL = "http://localhost:3000/"
  constructor(private http: HttpClient) { }


}
