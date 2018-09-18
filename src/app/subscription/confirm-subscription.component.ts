import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products/product';
import { ProductSubscriptionService } from './product-subscription.service';

@Component({
  selector: 'app-confirm-subscription',
  templateUrl: './confirm-subscription.component.html',
  styleUrls: ['./confirm-subscription.component.css']
})
export class ConfirmSubscriptionComponent implements OnInit {

  private product : Product = null;
  constructor(private _route:Router,private _productSubscriptionService : ProductSubscriptionService) { }
 
  ngOnInit() {

    this._productSubscriptionService.getSubscriptionInfo().subscribe(
      (data : Product) => this.product = data,
      () => console.log('ERROR in subscribing ')
    );
  }

  backToHome() : void {
    this._route.navigate(['/home']);
  }
}
