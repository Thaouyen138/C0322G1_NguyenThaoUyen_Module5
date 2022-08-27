import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../facility/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm = new FormGroup(
    {
      id: new FormControl('',[Validators.required]),
      sizeRoom: new FormControl('',[Validators.required]),
      maxPeople: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      standard: new FormControl('',[Validators.required])
    }
  )
  constructor(private facilityService: FacilityService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    this.facilityForm.reset();
    this.router.navigate(['facility']);
  }
}
