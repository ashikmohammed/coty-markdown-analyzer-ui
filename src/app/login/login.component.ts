import { Component, OnInit, Inject } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  userForm: any;

  private attribute: any = 'AKJHSDFUNJNV-HKJHDFDSS-KJDHFKDSF_COTY';
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
    this.userForm = this.formBuilder.group({
        userName: ['', [Validators.required, Validators.minLength(2)]],
        password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  reset() {
    this.userForm.reset();
  }

  redirectToDashboard() {
    let userName = this.userForm.value.userName;
    let password = this.userForm.value.password;
    
    
    if (this.userForm.dirty && this.userForm.valid) {
      //alert(`Name: ${this.userForm.value.userName} password: ${this.userForm.value.password}`);
      this.loginService
        .getLogin('http://localhost:8080/markdown/login', userName, password)
        .subscribe(
          data => { 
            if(JSON.parse(data).sessionId != ''){
				this.loginService.setSession(JSON.parse(data).sessionId);
				 this.router.navigate(['./dashboard']);	              
            } else {
				this.router.navigate(['./login']);
              alert("Please give valid username/password");
            }
          }
      ); 
    } 
  }
}
