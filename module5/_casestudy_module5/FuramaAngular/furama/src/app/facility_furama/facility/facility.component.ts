import {Component, OnInit} from '@angular/core';
import {Facility} from "./facility";
import {FacilityService} from "./facility.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilityList: Facility[] = [];

  id: string;
  name: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.facilityList = this.facilityService.getAll();
  }

  openDelete(id: string, name: string){
    this.id = id;
    this.name = name;
  }

  setIdDelete(id: string) {

  }

  edit(facility: Facility) {

  }
}
