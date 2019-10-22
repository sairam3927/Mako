import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userloginurl = '/api/user-login';
  forgotuserpasswordurl = '/api/forgot-user-password';
  otpVerificationurl = 'otpurl';
  udpateuserpasswordurl = '/api/udpate-user-password';

  public UserId : any;
  public AuthToken : any;

  constructor(private _http: HttpClient) { }

  public userlogin(body) {
    let response = this._http.post(environment.apiUrl + this.userloginurl, body)
    this.UserId = response['UserId'];
    this.AuthToken = response['AuthToken'];
    
    localStorage.setItem('UserId',response['UserId']);
    localStorage.setItem('AuthToken',response['AuthToken']);
    // localStorage.setItem('Permissions',response['Permissions']);

    return response
  }
  public forgotuserpassword(body) {
    return this._http.post(environment.apiUrl + this.forgotuserpasswordurl, body)
  }
  public otpVerification(body) {
    return this._http.post(environment.apiUrl + this.otpVerificationurl, body)
  }
  public udpateuserpassword(body) {
    return this._http.post(environment.apiUrl + this.udpateuserpasswordurl, body)
  }


}
