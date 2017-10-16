import { ViewChild,Component, OnInit } from '@angular/core';
import { Http, RequestOptions,Response, RequestMethod, Headers, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { MdaDatauploadService } from './mda-dataupload.service'
const URL = 'http://localhost:3000';

@Component({
  selector: 'app-mda-dataupload',
  templateUrl: './mda-dataupload.component.html',
  styleUrls: ['./mda-dataupload.component.css']
})
export class MdaDatauploadComponent implements OnInit {
	
  @ViewChild('fileInput') fileInput;
  uploadText = "Upload Raw Data Excel";
  showIcon = true;
  constructor(private router: Router, private http: Http) { }

  ngOnInit() 
  {
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

  uploadRawDataTemplate= function()
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
                     alert(success._body);
					 this.router.navigate(['/mdaStoreRankingUpload']);
                  },
                    (error) => alert(error)
                );

        }
	   
  };
  
  uploadDataTemplate= function()
  {
	    
	  //to be implementd.
	 
  };

}
