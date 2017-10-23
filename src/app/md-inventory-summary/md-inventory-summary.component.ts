import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-inventory-summary',
  templateUrl: './md-inventory-summary.component.html',
  styleUrls: ['./md-inventory-summary.component.css']
})
export class MdInventorySummaryComponent implements OnInit {

  @Input() cdMsg : string = 'Hello';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  previous() {
    this.router.navigate(['/MdChooseRetailer']);
  }
  next() {
    this.router.navigate(['/MdHowManyWaves']);
  }
}
