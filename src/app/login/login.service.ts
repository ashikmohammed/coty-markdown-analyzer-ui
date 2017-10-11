import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/observable/throw';


@Injectable()
export class LoginService {
  
  constructor(private http: Http, private router: Router) { }

  getLogin(url, userName: string, password: string): Observable<any> {

    let payLoad = {"userName": userName, "password":password};

    let options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    });

    return this.http
      .post(url, JSON.stringify(payLoad), options)
        .map(data => {
              //console.log(data.text());
              return data.text();
        }, error => {
            console.log(error.json());
        });
  }
 
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error("Custom Error" + errMsg);
    return Observable.throw(errMsg);
  }
}






