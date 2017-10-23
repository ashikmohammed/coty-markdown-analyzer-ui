import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-md-prioritizeupcdelete',
  templateUrl: './md-prioritizeupcdelete.component.html',
  styleUrls: ['./md-prioritizeupcdelete.component.css']
})
export class MdPrioritizeupcdeleteComponent implements OnInit {

  constructor(private router: Router) { }

  unequeUPCs=[];
  unequeUPCListforDelete=[];  

  ngOnInit() {
    this.unequeUPCs = [
      {
        "UPC": "2332233432234",
        "Desc": "test123",
        "Priority":
        [{ "key": 1, "value": 1 },
        { "key": 2, "value": 2 },
        { "key": 3, "value": 3 },
        { "key": 4, "value": 4 },
        { "key": 5, "value": 5 },
        { "key": 6, "value": 6 },
        { "key": 7, "value": 7 },
        { "key": 8, "value": 8 },
        { "key": 9, "value": 9 },
        { "key": 10, "value": 10 }],
        "MustDel":
        [{ "key": "Yes", "value": "Yes" },
        { "key": "No", "value": "No" }]
      },
      {
        "UPC": "432423322333",
        "Desc": "dgdfgtefdakj",
        "Priority":
        [{ "key": 1, "value": 1 },
        { "key": 2, "value": 2 },
        { "key": 3, "value": 3 },
        { "key": 4, "value": 4 },
        { "key": 5, "value": 5 },
        { "key": 6, "value": 6 },
        { "key": 7, "value": 7 },
        { "key": 8, "value": 8 },
        { "key": 9, "value": 9 },
        { "key": 10, "value": 10 }],
        "MustDel":
        [{ "key": "Yes", "value": "Yes" },
        { "key": "No", "value": "No" }]
      },
      {
        "UPC": "34423322334324",
        "Desc": "dfgdfgdtest123",
        "Priority":
        [{ "key": 1, "value": 1 },
        { "key": 2, "value": 2 },
        { "key": 3, "value": 3 },
        { "key": 4, "value": 4 },
        { "key": 5, "value": 5 },
        { "key": 6, "value": 6 },
        { "key": 7, "value": 7 },
        { "key": 8, "value": 8 },
        { "key": 9, "value": 9 },
        { "key": 10, "value": 10 }],
        "MustDel":
        [{ "key": "Yes", "value": "Yes" },
        { "key": "No", "value": "No" }]
      },
      {
        "UPC": "67623322334324",
        "Desc": "gdfgdtest123",
        "Priority":
        [{ "key": 1, "value": 1 },
        { "key": 2, "value": 2 },
        { "key": 3, "value": 3 },
        { "key": 4, "value": 4 },
        { "key": 5, "value": 5 },
        { "key": 6, "value": 6 },
        { "key": 7, "value": 7 },
        { "key": 8, "value": 8 },
        { "key": 9, "value": 9 },
        { "key": 10, "value": 10 }],
        "MustDel":
        [{ "key": "Yes", "value": "Yes" },
        { "key": "No", "value": "No" }]
      },
      {
        "UPC": "345323322334324",
        "Desc": "fgtrttest123",
        "Priority":
        [{ "key": 1, "value": 1 },
        { "key": 2, "value": 2 },
        { "key": 3, "value": 3 },
        { "key": 4, "value": 4 },
        { "key": 5, "value": 5 },
        { "key": 6, "value": 6 },
        { "key": 7, "value": 7 },
        { "key": 8, "value": 8 },
        { "key": 9, "value": 9 },
        { "key": 10, "value": 10 }],
        "MustDel":
        [{ "key": "Yes", "value": "Yes" },
        { "key": "No", "value": "No" }]
      },
      {
        "UPC": "7878923322334324",
        "Desc": "gfhgfhtest123",
        "Priority":
        [{ "key": 1, "value": 1 },
        { "key": 2, "value": 2 },
        { "key": 3, "value": 3 },
        { "key": 4, "value": 4 },
        { "key": 5, "value": 5 },
        { "key": 6, "value": 6 },
        { "key": 7, "value": 7 },
        { "key": 8, "value": 8 },
        { "key": 9, "value": 9 },
        { "key": 10, "value": 10 }],
        "MustDel":
        [{ "key": "Yes", "value": "Yes" },
        { "key": "No", "value": "No" }]
      },
      {
        "UPC": "4565423322334324",
        "Desc": "tefdfgst123",
        "Priority":
        [{ "key": 1, "value": 1 },
        { "key": 2, "value": 2 },
        { "key": 3, "value": 3 },
        { "key": 4, "value": 4 },
        { "key": 5, "value": 5 },
        { "key": 6, "value": 6 },
        { "key": 7, "value": 7 },
        { "key": 8, "value": 8 },
        { "key": 9, "value": 9 },
        { "key": 10, "value": 10 }],
        "MustDel":
        [{ "key": "Yes", "value": "Yes" },
        { "key": "No", "value": "No" }]
      },
      {
        "UPC": "5423322334324",
        "Desc": "fdfgst123",
        "Priority":
        [{ "key": 1, "value": 1 },
        { "key": 2, "value": 2 },
        { "key": 3, "value": 3 },
        { "key": 4, "value": 4 },
        { "key": 5, "value": 5 },
        { "key": 6, "value": 6 },
        { "key": 7, "value": 7 },
        { "key": 8, "value": 8 },
        { "key": 9, "value": 9 },
        { "key": 10, "value": 10 }],
        "MustDel":
        [{ "key": "Yes", "value": "Yes" },
        { "key": "No", "value": "No" }]
      },
      {
        "UPC": "5423322334324",
        "Desc": "cvvxctefdfgst123",
        "Priority":
        [{ "key": 1, "value": 1 },
        { "key": 2, "value": 2 },
        { "key": 3, "value": 3 },
        { "key": 4, "value": 4 },
        { "key": 5, "value": 5 },
        { "key": 6, "value": 6 },
        { "key": 7, "value": 7 },
        { "key": 8, "value": 8 },
        { "key": 9, "value": 9 },
        { "key": 10, "value": 10 }],
        "MustDel":
        [{ "key": "Yes", "value": "Yes" },
        { "key": "No", "value": "No" }]
      }
    ];
    for (let entry of this.unequeUPCs) {
      if (entry != null || entry != undefined) {
        let entries = { "UPC": "", "Desc": "", "Priority": "", "MustDel": "" };
        entries.UPC = entry.UPC;
        entries.Desc = entry.Desc;
        entries.Priority = "1";
        entries.MustDel = "Yes";
        this.unequeUPCListforDelete.push(entries);
      }
    }
  }
  priorityChange = function (event) {
    let index = event.path[2].rowIndex;
    let value = event.target.value.toString();
    this.unequeUPCListforDelete[index - 1].Priority = value;
  };
  mustDeleteChange = function (event) {
    let index = event.path[2].rowIndex;
    let value = event.target.value;
    this.unequeUPCListforDelete[index - 1].MustDel = value;

  };





  previous = function () {
    this.router.navigate(['/mdaStoreRankingUpload']);
  }

  saveNext = function () {
    this.router.navigate(['/MdChooseRetailer']);
    console.log(this.unequeUPCListforDelete);
  }

}
