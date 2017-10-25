import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-sustainable-growth',
  templateUrl: './md-sustainable-growth.component.html',
  styleUrls: ['./md-sustainable-growth.component.css']
})
export class MdSustainableGrowthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  previous() {
    this.router.navigate(['/MdToplineSummary']);
  }
  next(){
    this.router.navigate(['/MdSustainableDetail']);
  }

}
