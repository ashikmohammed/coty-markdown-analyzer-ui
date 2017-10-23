import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-select-retailer',
  templateUrl: './md-select-retailer.component.html',
  styleUrls: ['./md-select-retailer.component.css']
})
export class MdSelectRetailerComponent implements OnInit {

  radioEnties =[
    {
        id: 1,
        description: 'Walmart'
    },
    {
        id: 2,
        description: 'Other Retailer'
    }
];
 selectedEntry;
  constructor(private router: Router) { }

  ngOnInit() {
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
	  }
	  else if(this.selectedEntry.id == 2)
	  {
		  this.router.navigate(['/mdaDataUpload']);
	  }
	  else{
		  this.router.navigate(['/mdaDataUpload']);
	  }
    
  }

}
