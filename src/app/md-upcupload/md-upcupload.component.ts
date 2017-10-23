import { ViewChild,Component, OnInit } from '@angular/core';
import { Http, RequestOptions,Response, RequestMethod, Headers, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
const URL = 'http://localhost:3000';

@Component({
  selector: 'app-md-upcupload',
  templateUrl: './md-upcupload.component.html',
  styleUrls: ['./md-upcupload.component.css']
})
export class MdUpcuploadComponent implements OnInit {
	
  @ViewChild('fileInput') fileInput;
  uploadText = "Upload SKU UPC Excel";
  showIcon = true;
  
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
  }
   submit= function () {
        this.router.navigateByUrl('/MdChooseRetailer');
  };
  
   previous= function () {
        this.router.navigateByUrl('/MdSelectRetailer');
  };
  
   change = function(event)
  {
	  this.showIcon = false;
	  let filename = event.target.files[0].name;
	  this.uploadText = filename;
      	  
  };

  uploadSKUUPCTemplate = function()
  {
	     let inputEl = this.fileInput.nativeElement;
        console.log("iam+ "+inputEl);
        let fileCount: number = inputEl.files.length;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file', inputEl.files.item(i));
            }
            this.http
                .post(URL, formData).map((res:any) => res).subscribe(
                    (success) => {
					 this.router.navigate(['/MdChooseRetailer']);
                  },
                    (error) => alert(error)
                );
             this.router.navigate(['/MdChooseRetailer']);//ha to be changed.
        }
	   
  };

}
