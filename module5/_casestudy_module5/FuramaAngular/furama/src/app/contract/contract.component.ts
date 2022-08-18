import {Component, OnInit} from '@angular/core';
import {Contract} from "./contract";

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

  constructor() {
  }

  ngOnInit(): void {
  }

}
