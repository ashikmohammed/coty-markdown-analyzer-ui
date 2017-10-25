import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-md-inventory-summary',
  templateUrl: './md-inventory-summary.component.html',
  styleUrls: ['./md-inventory-summary.component.css']
})
export class MdInventorySummaryComponent implements OnInit {

  @Input() cdMsg : string = '';
  sessionPayload; 
  constructor(private router: Router , private loginService: LoginService) { }

  ngOnInit() {
	  
  this.sessionPayload = this.loginService.getSessionPayloadData();
  
  }
  previous() {
    this.router.navigate(['/MdChooseRetailer']);
  }
  next() {
    this.router.navigate(['/MdHowManyWaves']);
  }
}
