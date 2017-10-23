import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HolidayInventoryComponent } from './holiday-inventory/holiday-inventory.component';
import { LoginComponent } from './login/login.component';
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


export const router: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'holidayInv', component: HolidayInventoryComponent },
    { path: 'login', component: LoginComponent },
    { path: 'MdWhatYouNeed', component: MdWhatYouNeedComponent },
    { path: 'MdSelectRetailer', component: MdSelectRetailerComponent },
    { path: 'MdChooseRetailer', component: MdChooseRetailerComponent },
    { path: 'MdInventorySummary', component: MdInventorySummaryComponent },
    { path: 'MdSustainableGrowth', component: MdSustainableGrowthComponent },
    { path: 'MdHowManyWaves', component: MdHowManyWavesComponent },
    { path: 'MdMarkdownDetail', component: MdMarkdownDetailComponent },
    {path: 'mdaDataUpload',component:MdaDatauploadComponent},
    {path: 'mdaStoreRankingUpload',component:MdaStorerankingUploadComponent},
    {path: 'MdToplineSummary',component:MdToplineSummaryComponent},
    {path: 'MdSustainableDetail',component:MdSustainableDetailComponent},
    {path: 'MdInnovationDetails',component:MdInnovationDetailsComponent},
    {path: 'MdInnovationSummary',component:MdInnovationSummaryComponent},
    {path: 'MdDetailedReport',component:MdDetailedReportComponent},
    {path: 'MdPrioritizeupcdelete',component:MdPrioritizeupcdeleteComponent},
	{path: 'MdUpcupload',component:MdUpcuploadComponent}
];

//export const routes: ModuleWithProviders = RouterModule.forRoot(router); 

@NgModule({
    imports: [
      RouterModule.forRoot(router)
    ],
    exports: [
      RouterModule
    ],
    providers: [
    ]
  })
  export class routes { }
