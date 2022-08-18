import {Component, OnInit} from '@angular/core';
import {Facility} from "./facility";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList: Facility[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
