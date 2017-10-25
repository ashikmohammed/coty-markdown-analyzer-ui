import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-md-choose-retailer',
  templateUrl: './md-choose-retailer.component.html',
  styleUrls: ['./md-choose-retailer.component.css']
})
export class MdChooseRetailerComponent implements OnInit {
   checked = 0;
  radioEnties =[
    {
        id: 1,
        description: 'Retail'
    },
    {
        id: 2,
        description: 'Cost'
    }
];
 selectedEntry = {
        id: 1,
        description: 'Retail'
    };
 sessionPayload;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
	  this.sessionPayload = this.loginService.getSessionPayloadData();
	  this.checked = this.sessionPayload.markdownTypeId; 
	  if(this.checked == 1)
	  {
		 this.selectedEntry.id = this.checked;
		 this.selectedEntry.description ="Retail";
	  }
      else
	  {
		 this.selectedEntry.id = this.checked;
		 this.selectedEntry.description ="Cost";  
	  }		
  }
    onSelectionChange(entry) {
        this.selectedEntry = entry;
    }

  previous (){
    this.router.navigate(['/MdPrioritizeupcdelete']);
  }
  next(){
	  this.setSessionPayload(this.selectedEntry)
	 this.router.navigate(['/MdInventorySummary']);
    
  }
  
  setSessionPayload = function(markdownType)
  {
	  this.sessionPayload.markdownType = markdownType.description;
	  this.sessionPayload.markdownTypeId = markdownType.id;
	this.loginService.setSessionPayloadData(this.sessionPayload); 
  }

}
