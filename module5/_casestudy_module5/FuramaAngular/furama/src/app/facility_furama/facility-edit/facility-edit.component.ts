import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FacilityService} from "../facility/facility.service";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  id: number
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
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }
  onSubmit() {
    const facility = this.facilityForm.value;
    this.facilityService.updateCustomer(this.id,facility);
    this.facilityForm.reset();
    this.router.navigate(['facility']);
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    const customer = this.facilityService.findById(id);
    this.facilityForm.patchValue(customer)
  }

}
