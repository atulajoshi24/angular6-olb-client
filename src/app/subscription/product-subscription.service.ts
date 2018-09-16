import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductSubscriptionService {

  baseUrl = "http://localhost:8080/springbootrest/";
  constructor(private _http:HttpClient) { }

  getUserAccounts() : Observable<Account[]>{
    return this._http.get<Account[]>(this.baseUrl+"/accounts",{withCredentials: true});
  }

  getProducts() : Observable<Product[]>{
    return this._http.get<Product[]>(this.baseUrl+"/products",{withCredentials: true});
  }

  subscribeToProduct(productId : number , accountId : number) : Observable<Product>{
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',     
      }),
      withCredentials: true,
    }; 

    return this._http.post<Product>(this.baseUrl+"/productSubscription/"+productId+"/"+accountId,
    null,httpOptions);

  }

}
