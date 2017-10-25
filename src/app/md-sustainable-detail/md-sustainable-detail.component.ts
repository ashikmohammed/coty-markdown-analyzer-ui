import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-sustainable-detail',
  templateUrl: './md-sustainable-detail.component.html',
  styleUrls: ['./md-sustainable-detail.component.css']
})
export class MdSustainableDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  previous() {
    this.router.navigate(['/MdSustainableGrowth']);
  }
  next() {
    this.router.navigate(['/MdInnovationDetails']);
  }
}
