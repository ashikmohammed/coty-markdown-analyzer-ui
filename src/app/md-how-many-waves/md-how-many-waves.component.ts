import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-how-many-waves',
  templateUrl: './md-how-many-waves.component.html',
  styleUrls: ['./md-how-many-waves.component.css']
})
export class MdHowManyWavesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  previous() {
    this.router.navigate(['/MdInventorySummary']);
  }
  next() {
    if(localStorage.getItem('AUTH_TOKEN') != null){
      alert(localStorage.getItem('AUTH_TOKEN'));
        this.router.navigate(['/MdMarkdownDetail']);
    } else{
      this.router.navigate(['./login']);
    }
    
  }
}
