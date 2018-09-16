import { Component, OnInit } from '@angular/core';
import { ProductSubscriptionService } from './product-subscription.service';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { Product } from '../products/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-subscription',
  templateUrl: './product-subscription.component.html',
  styleUrls: ['./product-subscription.component.css']
})
export class ProductSubscriptionComponent implements OnInit {

  private accounts : Account [] = null; 
  private products : Product[] = null; 
  private productSubscriptionForm : FormGroup = null; 
  
  constructor(private _productSubscriptionService : ProductSubscriptionService,
             private _fb:FormBuilder,private _router : Router) { }

  ngOnInit() {
  
    this.productSubscriptionForm = this._fb.group({
         
      productId : ['',Validators.required],
      accountId : ['',Validators.required],
   });

   this._productSubscriptionService.getUserAccounts().subscribe(   
    (accounts) => this.accounts = accounts,
    () => console.log('ERROR ')
   )

   this._productSubscriptionService.getProducts().subscribe(
      (products : Product[]) => this.products = products,
      () => console.log('ERROR ')
   )
    
  
    //get list of accounts 
    //get list of products 

  }

  subscribe() : void {
  
    let productId = this.productSubscriptionForm.get('productId').value;
    let accountId = this.productSubscriptionForm.get('accountId').value;
   
    this._productSubscriptionService.subscribeToProduct(productId,accountId).subscribe(
      () => this.navigateToProductSubscription(),
      () => console.log('Error in Subscribe To Product')
    );
     
  } 

  navigateToProductSubscription() :void {
    this._router.navigate(['/subscribeSuccess']);
  }

}
