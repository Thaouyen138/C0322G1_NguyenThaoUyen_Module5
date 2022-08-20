import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityComponent} from "./facility/facility.component";
import {CustomerComponent} from "./customer/customer.component";
import {ContractComponent} from "./contract/contract.component";


const routes: Routes = [
  {path: 'facility',component: FacilityComponent},
  {path: 'customer',component: CustomerComponent},
  {path: 'contract',component: ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
