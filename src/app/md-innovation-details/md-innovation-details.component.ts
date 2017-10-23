import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-innovation-details',
  templateUrl: './md-innovation-details.component.html',
  styleUrls: ['./md-innovation-details.component.css']
})
export class MdInnovationDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previous (){
    this.router.navigate(['/MdSustainableDetail']);
  }
  next(){
    this.router.navigate(['/MdInnovationSummary']);
  }

}
