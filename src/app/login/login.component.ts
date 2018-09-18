import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm : FormGroup = null;
  private user : User = null;
  authenticated : boolean = false; 
  errors : string = "";

  constructor(private _loginService : LoginService,
            private _fb : FormBuilder,private _router: Router) { }
  
 

  login() :void {

    let username =  this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;

    this._loginService.login(username,password).subscribe(
      () => this.authenicate(),
      () => this.onFailedAuthentication()
    );

  }

  onSuccessFullAuthentication(): void {
    //this._router.navigate(['subscribe']);
    this._loginService.setAuthenticatedFlag(true);
    this._router.navigate(['/subscribe']);
  }

  onFailedAuthentication(): void {
    //this._router.navigate(['subscribe']);
    this._loginService.setAuthenticatedFlag(false);
    this._router.navigate(['/login']);
    this.errors = "Login Error , Please Login Again ";

  }
     
  authenicate() : void {

    this._loginService.authenticate().subscribe(
      (user : User ) => this.onSuccessFullAuthentication(),
      () => this.onFailedAuthentication()
    );
  }

  

  ngOnInit() {

    this.loginForm = this._fb.group({
        username : ['',Validators.required],
        password : ['',Validators.required]

    });

    this.user = {
      username : '',
      password : '',
    };
  }
}
