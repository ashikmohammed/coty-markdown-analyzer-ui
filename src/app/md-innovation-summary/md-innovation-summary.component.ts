import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-innovation-summary',
  templateUrl: './md-innovation-summary.component.html',
  styleUrls: ['./md-innovation-summary.component.css']
})
export class MdInnovationSummaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  previous() {
    this.router.navigate(['/MdInnovationDetails']);
  }
  next() {
    this.router.navigate(['/MdDetailedReport']);
  }
}
