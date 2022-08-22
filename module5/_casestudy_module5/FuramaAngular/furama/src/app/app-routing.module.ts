import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityComponent} from "./facility/facility.component";
import {CustomerComponent} from "./customer/customer.component";
import {ContractComponent} from "./contract/contract.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'facility',component: FacilityComponent},
  {path: 'customer',component: CustomerComponent},
  {path: 'contract',component: ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
