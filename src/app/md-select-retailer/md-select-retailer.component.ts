import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-md-select-retailer',
  templateUrl: './md-select-retailer.component.html',
  styleUrls: ['./md-select-retailer.component.css']
})
export class MdSelectRetailerComponent implements OnInit {
  checked = 0;
  radioEnties =[
    {
        id: 1,
        description: 'Walmart'
    },
    {
        id: 2,
        description: 'Other/FSO'
    }
];
 selectedEntry={
        id: 1,
        description: 'Walmart'
    }
 sessionPayload;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
	 
	  this.sessionPayload = this.loginService.getSessionPayloadData();
	  this.checked = this.sessionPayload.retailerId;
      if(this.checked == 1)
	  {
		 this.selectedEntry.id = this.checked;
		 this.selectedEntry.description ="Walmart";
	  }
      else
	  {
		 this.selectedEntry.id = this.checked;
		 this.selectedEntry.description ="Other/FSO";  
	  }		  
  }
    onSelectionChange(entry) {
        this.selectedEntry = entry;
    }

  previous (){
    this.router.navigate(['/MdWhatYouNeed']);
  }
  next(){
	  if(this.selectedEntry.id == 1)
	  {
		  this.router.navigate(['/MdUpcupload']);
		  this.setSessionPayload("walmart")
	  }
	  else if(this.selectedEntry.id == 2)
	  {
		  this.router.navigate(['/mdaDataUpload']);
		  this.setSessionPayload("other")
	  }
	  else{
		  this.router.navigate(['/mdaDataUpload']);
	  }
    
  }
  
  setSessionPayload = function(selectedRetailor)
  {
	  this.sessionPayload.retailerName = selectedRetailor;
	  this.sessionPayload.retailerId = this.selectedEntry.id;
	  
	this.loginService.setSessionPayloadData(this.sessionPayload); 
  }

}
