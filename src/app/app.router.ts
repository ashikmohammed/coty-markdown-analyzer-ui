import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HolidayInventoryComponent } from './holiday-inventory/holiday-inventory.component';
import { LoginComponent } from './login/login.component';
import { MdCalculatorStep1Component } from './md-calculator-step1/md-calculator-step1.component';
import { MdCalculatorStep2Component } from './md-calculator-step2/md-calculator-step2.component';

export const router: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'holidayInv', component: HolidayInventoryComponent },
    { path: 'login', component: LoginComponent },
    { path: 'MdCalStep1', component: MdCalculatorStep1Component },
    { path: 'MdCalStep2', component: MdCalculatorStep2Component }
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
