import { ViewChild, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-md-prioritizeupcdelete',
  templateUrl: './md-prioritizeupcdelete.component.html',
  styleUrls: ['./md-prioritizeupcdelete.component.css']
})
export class MdPrioritizeupcdeleteComponent implements OnInit {
	
  constructor(private router: Router, private loginService: LoginService) { }

  unequeUPCs=[];
  unequeUPCListforDelete=[];
  sessionPayload ; 
  @ViewChild('pttype') pttype;
  @ViewChild('mustdel') mustdel;
  ngOnInit() {
	 this.sessionPayload = this.loginService.getSessionPayloadData();
    this.unequeUPCs = this.sessionPayload.uniqueUpclistforUI;
	for (let entry of this.unequeUPCs) {
      if (entry != null || entry != undefined) {
        let entries = { "upcNumber": "", "upcDescription": "", "priority": "", "isDelete": "" };
        entries.upcNumber = entry.UPC;
        entries.upcDescription = entry.Desc;
        entries.priority = "1";
        entries.isDelete = "Yes";
        this.unequeUPCListforDelete.push(entries);
      }
    }	
	if(this.sessionPayload.listOfUniqueUpcs.length >0)
	{
       for (let entry of this.unequeUPCs) {	
		   for (let entry1 of this.sessionPayload.listOfUniqueUpcs) {
			if(entry.UPC === entry1.upcNumber)
			 {
				entry.selectedPriority=entry1.priority;
				entry.selectedisDelete=entry1.isDelete;
			 }
		   }
		}
		for (let entry of this.sessionPayload.listOfUniqueUpcs) {	
		   for (let entry1 of this.unequeUPCListforDelete) {
			if(entry.upcNumber === entry1.upcNumber)
			 {
				entry1.priority=entry.priority;
				entry1.isDelete=entry.isDelete;
			 }
		   }
		}
	}
   
  //let ptotypeEl = this.pttype.nativeElement;
  //let mustdelEl = this.mustdel.nativeElement;
  }
  priorityChange = function (event) {
    let index = event.path[2].rowIndex;
    let value = event.target.value.toString();
    this.unequeUPCListforDelete[index - 1].priority = value;
  };
  mustDeleteChange = function (event) {
    let index = event.path[2].rowIndex;
    let value = event.target.value;
    this.unequeUPCListforDelete[index - 1].isDelete = value;

  };





  previous = function () {
    this.router.navigate(['/mdaStoreRankingUpload']);
  }

  saveNext = function () {
	 this.sessionPayload.listOfUniqueUpcs = this.unequeUPCListforDelete;
	this.loginService.setSessionPayloadData(this.sessionPayload);
    this.router.navigate(['/MdChooseRetailer']);
  }

}
