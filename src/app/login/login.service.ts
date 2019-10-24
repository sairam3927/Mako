import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { permissionsResponse } from './permissions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userloginurl = '/api/user-login';
  forgotuserpasswordurl = '/api/forgot-user-password';
  validateforgotpasswordotpurl = '/api/validate-forgot-password-otp';
  udpateuserpasswordurl = '/api/update-user-password';

  public UserId: any;
  public AuthToken: any;

  constructor(private _http: HttpClient) { }

  public userlogin(body) {
    return this._http.post(environment.apiUrl + this.userloginurl, body)
  }
  public forgotuserpassword(body) {
    return this._http.post(environment.apiUrl + this.forgotuserpasswordurl, body)
  }
  public validateforgotpasswordotp(body) {
    return this._http.post(environment.apiUrl + this.validateforgotpasswordotpurl, body)
  }
  public udpateuserpassword(body) {
    return this._http.post(environment.apiUrl + this.udpateuserpasswordurl, body)
  }


}
