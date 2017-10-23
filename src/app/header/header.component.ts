import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router , private loginService: LoginService) { }

  sessionID = null;
  ngOnInit() {
	  this.sessionID = this.loginService.getSession();
	  if(this.sessionID == null || this.sessionID == '')
	  {
		 this.router.navigate(['/login']); 
	  }
  }

  myFunction(x) {
      x.classList.toggle("change");
  }

  logout(){
	 this.loginService.resetSession();
    this.router.navigate(['./login']);
  }

}
