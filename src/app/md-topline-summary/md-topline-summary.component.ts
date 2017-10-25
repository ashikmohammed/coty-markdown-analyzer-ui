import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-topline-summary',
  templateUrl: './md-topline-summary.component.html',
  styleUrls: ['./md-topline-summary.component.css']
})
export class MdToplineSummaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  previous() {
    this.router.navigate(['/MdMarkdownDetail']);
  }
  next() {
    this.router.navigate(['/MdSustainableGrowth']);
  }

}
