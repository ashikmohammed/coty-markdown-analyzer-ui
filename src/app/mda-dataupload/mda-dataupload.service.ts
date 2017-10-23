import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, RequestMethod, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
//import { FileSaver } from 'file-saver';



// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/observable/throw';

@Injectable()
export class MdaDatauploadService {

  constructor(private http: Http, private router: Router) { }

    
}
