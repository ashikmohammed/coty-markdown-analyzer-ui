import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-choose-retailer',
  templateUrl: './md-choose-retailer.component.html',
  styleUrls: ['./md-choose-retailer.component.css']
})
export class MdChooseRetailerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previous (){
    this.router.navigate(['/MdPrioritizeupcdelete']);
  }
  next(){
    this.router.navigate(['/MdInventorySummary']);
  }

}
