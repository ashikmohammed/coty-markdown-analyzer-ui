import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  constructor(private router: Router, private loginService: LoginService) { }
  sessionID = null;
  ngOnInit() {
	  this.sessionID = this.loginService.getSession();
	  if(this.sessionID == null || this.sessionID == '')
	  {
		 this.router.navigate(['/login']); 
	  }
  }
  
  next(){
    this.router.navigate(['/MdWhatYouNeed']);
  }
}
