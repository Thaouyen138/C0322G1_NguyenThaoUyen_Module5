import {Component, OnInit} from '@angular/core';
import {Facility} from "./facility";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
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
      price: 5000,
      standard: 'VIP'
    },
    {
      id: 'FA-0009',
      sizeRoom: 150,
      maxPeople: 5,
      price: 5000,
      standard: 'VIP'
    },
    {
      id: 'FA-0010',
      sizeRoom: 150,
      maxPeople: 5,
      price: 4000,
      standard: 'GOOD'
    },
    ];
  facilityForm = new FormGroup(
    {
      id: new FormControl('',[Validators.required]),
      sizeRoom: new FormControl('',[Validators.required]),
      maxPeople: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      standard: new FormControl('',[Validators.required])
    }
  )
  idFacility = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const facility = this.facilityForm.value;
    this.facilityList.push(facility);
    this.facilityForm.reset()
  }

  edit(facility: Facility) {
    this.facilityForm.patchValue(facility);
  }

  update() {
    const facility = this.facilityForm.value;
    console.log(facility)
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === facility.id){
        this.facilityList[i] = facility;
      }
    }
  }

  delete(){
    for (let i = 0; i < this.facilityList.length; i++) {
      if(this.idFacility === this.facilityList[i].id){
        this.facilityList.splice(i,1);
        break;
      }
    }
  }

  setIdDelete(id: string) {
    this.idFacility = id;
  }
}
