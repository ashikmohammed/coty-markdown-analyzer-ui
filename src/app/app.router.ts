import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HolidayInventoryComponent } from './holiday-inventory/holiday-inventory.component';
import { LoginComponent } from './login/login.component';
import { MdCalculatorStep1Component } from './md-calculator-step1/md-calculator-step1.component';
import { MdCalculatorStep2Component } from './md-calculator-step2/md-calculator-step2.component';
import { MdCalculatorStep3Component } from './md-calculator-step3/md-calculator-step3.component';
import { MdWhatYouNeedComponent } from './md-what-you-need/md-what-you-need.component';
import { MdSelectRetailerComponent } from './md-select-retailer/md-select-retailer.component';
import { MdChooseRetailerComponent } from './md-choose-retailer/md-choose-retailer.component';
import { MdInventorySummaryComponent } from './md-inventory-summary/md-inventory-summary.component';
import { MdaDatauploadComponent } from './mda-dataupload/mda-dataupload.component';
import { MdaStorerankingUploadComponent } from './mda-storeranking-upload/mda-storeranking-upload.component';

export const router: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'holidayInv', component: HolidayInventoryComponent },
    { path: 'login', component: LoginComponent },
    { path: 'MdCalStep1', component: MdCalculatorStep1Component },
    { path: 'MdCalStep2', component: MdCalculatorStep2Component },
    { path: 'MdCalStep3', component: MdCalculatorStep3Component },
    { path: 'MdWhatYouNeed', component: MdWhatYouNeedComponent },
    { path: 'MdSelectRetailer', component: MdSelectRetailerComponent },
    { path: 'MdChooseRetailer', component: MdChooseRetailerComponent },
    { path: 'MdInventorySummary', component: MdInventorySummaryComponent },
	{path: 'mdaDataUpload',component:MdaDatauploadComponent},
	{path: 'mdaStoreRankingUpload',component:MdaStorerankingUploadComponent}
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
