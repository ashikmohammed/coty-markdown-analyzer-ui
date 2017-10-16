import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.router';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ControlMessagesComponent } from './control-messages.component';
import { ValidationService } from './validation.service';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { MdaDatauploadService } from './mda-dataupload/mda-dataupload.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { HolidayInventoryComponent } from './holiday-inventory/holiday-inventory.component';
import { MdCalculatorStep1Component } from './md-calculator-step1/md-calculator-step1.component';
import { MdCalculatorStep2Component } from './md-calculator-step2/md-calculator-step2.component';
import { MdCalculatorStep3Component } from './md-calculator-step3/md-calculator-step3.component';
import { MdWhatYouNeedComponent } from './md-what-you-need/md-what-you-need.component';
import { MdSelectRetailerComponent } from './md-select-retailer/md-select-retailer.component';
import { MdChooseRetailerComponent } from './md-choose-retailer/md-choose-retailer.component';
import { MdInventorySummaryComponent } from './md-inventory-summary/md-inventory-summary.component';
import { MdaDatauploadComponent } from './mda-dataupload/mda-dataupload.component';
import { MdaStorerankingUploadComponent } from './mda-storeranking-upload/mda-storeranking-upload.component';

@NgModule({
  declarations: [
    ControlMessagesComponent,
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NavComponent,
    HolidayInventoryComponent,
    MdCalculatorStep1Component,
    MdCalculatorStep2Component,
    MdCalculatorStep3Component,
    MdWhatYouNeedComponent,
    MdSelectRetailerComponent,
    MdChooseRetailerComponent,
    MdInventorySummaryComponent,
    MdaDatauploadComponent,
    MdaStorerankingUploadComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	AlertModule.forRoot(),
	BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
	RouterModule,
    FormsModule,
	ReactiveFormsModule, 
	routes
  ],
  exports: [AlertModule,BsDropdownModule, TooltipModule, ModalModule],
  providers: [ LoginService, ValidationService, MdaDatauploadService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
