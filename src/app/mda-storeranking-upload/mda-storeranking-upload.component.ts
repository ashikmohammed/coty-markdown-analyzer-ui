import { ViewChild,Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions,Response, RequestMethod, Headers, URLSearchParams } from '@angular/http';
//import { MdaDatauploadService } from './mda-dataupload.service'
const URL = 'http://localhost:8080/upload/storeranking';


@Component({
  selector: 'app-mda-storeranking-upload',
  templateUrl: './mda-storeranking-upload.component.html',
  styleUrls: ['./mda-storeranking-upload.component.css']
})
export class MdaStorerankingUploadComponent implements OnInit {
	
   @ViewChild('fileInput') fileInput;
   uploadText ="Upload Store Ranking Excel"; 
	showIcon = true;
  constructor(private router: Router,private http: Http) { }
   
  ngOnInit() {
	
  }
  
  previous () 
  {     
	  this.router.navigate(['/mdaDataUpload']);
  }

  
  change = function(event)
  {
	  let filename = event.target.files[0].name;
	  this.uploadText = filename;
      this.showIcon = false;	  
  };
  uploadStoreRankingTemplate = function(){
	  
	  let inputEl = this.fileInput.nativeElement;
        console.log("iam+ "+inputEl);
        let fileCount = inputEl.files.length;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('uploadfile', inputEl.files.item(i));
            }
            this.http
                .post(URL, formData).map((res:any) => res).subscribe(
                    (success) => {
                    console.log(success._body);
					 this.router.navigate(['/MdPrioritizeupcdelete']);
                  },
                  (error) => alert(error)
                );

        }
		
  };

}
