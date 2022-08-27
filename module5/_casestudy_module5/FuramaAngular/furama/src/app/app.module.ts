import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FacilityComponent } from './facility_furama/facility/facility.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerComponent } from './customer_furama/customer/customer.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { CustomerCreateComponent } from './customer_furama/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer_furama/customer-edit/customer-edit.component';
import { FacilityCreateComponent } from './facility_furama/facility-create/facility-create.component';
import { FacilityEditComponent } from './facility_furama/facility-edit/facility-edit.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FacilityComponent,
    ContractComponent,
    CustomerComponent,
    FooterComponent,
    HomeComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    FacilityCreateComponent,
    FacilityEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
