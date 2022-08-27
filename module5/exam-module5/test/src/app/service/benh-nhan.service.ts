import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {BenhNhan} from "../model/benh-nhan";

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  API_URL = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  getAll(): Observable<BenhNhan[]>{
    return this.http.get<BenhNhan[]>(this.API_URL +'benhNhanList');
  }
}
