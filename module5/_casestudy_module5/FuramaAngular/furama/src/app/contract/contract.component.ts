import {Component, OnInit} from '@angular/core';
import {Contract} from "./contract";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [
    {
      id: 'CO-0001',
      facilityId: 'FA-0001',
      customerId: 'CU-0001',
      startDate: '2020-08-08',
      endDate: '2020-09-09',
      desposit: 1000,
      total: 1200
    },
    {
      id: 'CO-0002',
      facilityId: 'FA-0002',
      customerId: 'CU-0003',
      startDate: '2020-09-08',
      endDate: '2020-10-09',
      desposit:500,
      total: 1200
    },
    {
      id: 'CO-0003',
      facilityId: 'FA-0003',
      customerId: 'CU-0005',
      startDate: '2022-08-31',
      endDate: '2022-09-09',
      desposit: 1500,
      total: 2400
    }
  ]
  contractForm = new FormGroup(
    {
      id: new FormControl('',[Validators.required]),
      facilityId: new FormControl('',[Validators.required]),
      customerId: new FormControl('',[Validators.required]),
      startDate: new FormControl('',[Validators.required]),
      endDate: new FormControl('',[Validators.required]),
      desposit: new FormControl('',[Validators.required]),
      total: new FormControl('',[Validators.required])
    }
  )
  idContract = '';
  constructor() {
  }

  ngOnInit(): void {
  }


  onSubmit() {
    const contract = this.contractForm.value;
    this.contractList.push(contract);
    this.contractForm.reset()
  }

  delete(){
    for (let i = 0; i < this.contractList.length; i++) {
      if(this.idContract === this.contractList[i].id){
        this.contractList.splice(i,1);
        break;
      }
    }
  }

  setIdDelete(id: string) {
    this.idContract = id;
  }
}
