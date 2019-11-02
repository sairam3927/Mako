import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class QcService {

  public httpOptions = {
    headers: new HttpHeaders({
      'userId':  localStorage.getItem('UserId') ,
      'authToken': localStorage.getItem('AuthToken')
    })
  };

  getqclisturl = 'api/get-qc-list';

  constructor(private _http: HttpClient) { }

  public getqclist() {
    return this._http.get(environment.apiUrl + this.getqclisturl, this.httpOptions)
  }
 
}
