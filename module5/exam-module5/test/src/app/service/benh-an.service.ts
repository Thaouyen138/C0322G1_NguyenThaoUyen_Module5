import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenhNhan} from "../model/benh-nhan";
import {BenhAn} from "../model/benh-an";

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  API_URL = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  getAll(): Observable<BenhAn[]>{
    return this.http.get<BenhAn[]>(this.API_URL +'benhAnList');
  }
  update(benhAn: BenhAn): Observable<void> {
    console.log(benhAn)
    return this.http.patch<void>(this.API_URL + "benhAnList/" + benhAn.id, benhAn)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + "benhAnList/"+ id)
  }

  save(benhAn: BenhAn): Observable<void> {
    return this.http.post<void>(this.API_URL + "benhAnList", benhAn)
  }
}
