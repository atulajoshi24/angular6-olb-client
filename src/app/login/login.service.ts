import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class LoginService {

  private baseUrl : string = "http://localhost:8080/springbootrest/";
  private authenticated : boolean = false; 

  setAuthenticatedFlag(isAuthenticated : boolean){
    this.authenticated = isAuthenticated;
  }
  

  getAuthenticatedFlag(){
    return this.authenticated;
  }
  constructor(private _http :HttpClient) { }

  authenticate() : Observable<User> {
     return this._http.get<User>(this.baseUrl+"/user", {withCredentials: true});
  }

login(username : string , password:string) : Observable<any>{

  const body = new HttpParams()
  .set('username', username)
  .set('password', password);

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    }),
    withCredentials: true,
  }; 
  return this._http.post(this.baseUrl+"/login",body,httpOptions);

}

}