import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-markdown-detail',
  templateUrl: './md-markdown-detail.component.html',
  styleUrls: ['./md-markdown-detail.component.css']
})
export class MdMarkdownDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previous (){
    this.router.navigate(['/MdHowManyWaves']);
  }
  next(){
    this.router.navigate(['/MdToplineSummary']);
  }

}
