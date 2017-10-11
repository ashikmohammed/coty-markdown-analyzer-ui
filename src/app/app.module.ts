import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.router';
import { HttpModule } from '@angular/http';
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
import { MdCalculatorStep1Component } from './md-calculator-step1/md-calculator-step1.component';
import { MdCalculatorStep2Component } from './md-calculator-step2/md-calculator-step2.component';

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
    MdCalculatorStep2Component
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule,
    FormsModule, ReactiveFormsModule, routes
  ],
  providers: [ LoginService, ValidationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
