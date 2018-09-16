import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticated : boolean = false; 
  constructor(private _loginService : LoginService) { }

  ngOnInit() {
    this.authenticated =  this._loginService.getAuthenticatedFlag();
  }



}
