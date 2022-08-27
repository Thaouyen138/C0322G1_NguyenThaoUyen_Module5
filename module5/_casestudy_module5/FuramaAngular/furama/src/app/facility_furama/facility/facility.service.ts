import { Injectable } from '@angular/core';
import {Facility} from "./facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [
    {
      id: 'FA-0001',
      sizeRoom: 80,
      maxPeople: 2,
      price: 4000,
      standard: 'VIP'
    },
    {
      id: 'FA-0002',
      sizeRoom: 100,
      maxPeople: 3,
      price: 5000,
      standard: 'VIP'
    },
    {
      id: 'FA-0003',
      sizeRoom: 40,
      maxPeople: 4,
      price: 2000,
      standard: 'NORMAL'
    },
    {
      id: 'FA-0004',
      sizeRoom: 30,
      maxPeople: 2,
      price: 1500,
      standard: 'NORMAL'
    },
    {
      id: 'FA-0005',
      sizeRoom: 150,
      maxPeople: 5,
      price: 3000,
      standard: 'VIP'
    },
    {
      id: 'FA-0006',
      sizeRoom: 200,
      maxPeople: 5,
      price: 5000,
      standard: 'VIP'
    },
    {
      id: 'FA-0007',
      sizeRoom: 150,
      maxPeople: 5,
      price: 5000,
      standard: 'GOOD'
    },
    {
      id: 'FA-0008',
      sizeRoom: 150,
      maxPeople: 5,
      price: 2000,
      standard: 'VIP'
    },
    {
      id: 'FA-0009',
      sizeRoom: 150,
      maxPeople: 5,
      price: 1500,
      standard: 'VIP'
    }
  ];

  getAll() {
    return this.facilityList;
  }

  saveFacility(facility: Facility) {
    this.facilityList.push(facility);
  }

  findById(id: string) {
    return this.facilityList.find(facility => facility.id === id)
  }

  updateFacility(id: number, facility: Facility) {
    console.log(facility)
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === facility.id) {
        this.facilityList[i] = facility;
      }
    }
  }

  delete(id: string) {
    this.facilityList = this.facilityList.filter(facility => {
      return facility.id !== id;
    })
  }

  constructor() { }

  updateCustomer(id: number, facility: any) {

  }
}
