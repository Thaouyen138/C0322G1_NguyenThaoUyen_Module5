import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityComponent} from "./facility_furama/facility/facility.component";
import {CustomerComponent} from "./customer_furama/customer/customer.component";
import {ContractComponent} from "./contract/contract.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {CustomerCreateComponent} from "./customer_furama/customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer_furama/customer-edit/customer-edit.component";
import {FacilityCreateComponent} from "./facility_furama/facility-create/facility-create.component";
import {FacilityEditComponent} from "./facility_furama/facility-edit/facility-edit.component";


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'facility',component: FacilityComponent},
  {path: 'facility/create',component: FacilityCreateComponent},
  {path: 'facility/edit/:id',component: FacilityEditComponent},
  {path: 'customer',component: CustomerComponent},
  {path: 'customer/create',component: CustomerCreateComponent},
  {path: 'customer/edit/:id',component: CustomerEditComponent},
  // {
  //   path: 'customer',
  //   loadChildren: () => import('./customer_furama/customer-routing/customer-routing-routing.module').then(module => module.CustomerRoutingRoutingModule)
  // },
  {path: 'contract',component: ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
