import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-subscription',
  templateUrl: './confirm-subscription.component.html',
  styleUrls: ['./confirm-subscription.component.css']
})
export class ConfirmSubscriptionComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }

  backToHome() : void {
    this._route.navigate(['/home']);
  }
}
