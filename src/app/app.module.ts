import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CoolStorageModule } from 'angular2-cool-storage';
import { Ng2Webstorage } from 'ngx-webstorage';

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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { HolidayInventoryComponent } from './holiday-inventory/holiday-inventory.component';
import { MdWhatYouNeedComponent } from './md-what-you-need/md-what-you-need.component';
import { MdSelectRetailerComponent } from './md-select-retailer/md-select-retailer.component';
import { MdChooseRetailerComponent } from './md-choose-retailer/md-choose-retailer.component';
import { MdInventorySummaryComponent } from './md-inventory-summary/md-inventory-summary.component';
import { MdSustainableGrowthComponent } from './md-sustainable-growth/md-sustainable-growth.component';
import { MdHowManyWavesComponent } from './md-how-many-waves/md-how-many-waves.component';
import { MdMarkdownDetailComponent } from './md-markdown-detail/md-markdown-detail.component';
import { MdaDatauploadComponent } from './mda-dataupload/mda-dataupload.component';
import { MdaStorerankingUploadComponent } from './mda-storeranking-upload/mda-storeranking-upload.component';
import { MdToplineSummaryComponent } from './md-topline-summary/md-topline-summary.component';
import { MdSustainableDetailComponent } from './md-sustainable-detail/md-sustainable-detail.component';
import { MdInnovationDetailsComponent } from './md-innovation-details/md-innovation-details.component';
import { MdInnovationSummaryComponent } from './md-innovation-summary/md-innovation-summary.component';
import { MdDetailedReportComponent } from './md-detailed-report/md-detailed-report.component';
import { MdPrioritizeupcdeleteComponent } from './md-prioritizeupcdelete/md-prioritizeupcdelete.component';
import { MdUpcuploadComponent } from './md-upcupload/md-upcupload.component';

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
    MdWhatYouNeedComponent,
    MdSelectRetailerComponent,
    MdChooseRetailerComponent,
    MdInventorySummaryComponent,
    MdSustainableGrowthComponent,
    MdHowManyWavesComponent,
    MdMarkdownDetailComponent,
    MdaDatauploadComponent,
    MdaStorerankingUploadComponent,
    MdToplineSummaryComponent,
    MdSustainableDetailComponent,
    MdInnovationDetailsComponent,
    MdInnovationSummaryComponent,
    MdDetailedReportComponent,
    MdPrioritizeupcdeleteComponent,
    MdUpcuploadComponent
  ],
  imports: [
    BrowserModule, HttpModule,AlertModule.forRoot(),
	BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(), RouterModule, CoolStorageModule, Ng2Webstorage, 
    FormsModule, ReactiveFormsModule, routes
  ],
  providers: [ LoginService, ValidationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
