import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class PatientDashboardService {

  public httpOptions = {
    headers: new HttpHeaders({
      'userId': localStorage.getItem('UserId'),
      'authToken': localStorage.getItem('AuthToken')
    })
  };

  getpatientinfolisturl = 'api/get-patientinfo-list';
  getdocs_datalisturl = 'api/get-docs_data-list';

  constructor(private _http: HttpClient) { }

  public getpatientinfolist(body) {
    console.log(localStorage.getItem('UserId'),"localStorage.getItem('UserId')");
    console.log(localStorage.getItem('AuthToken'),"localStorage.getItem('AuthToken')");
    return this._http.post(environment.apiUrl + this.getpatientinfolisturl,body, this.httpOptions)
  }
  public getdocs_datalist(body) {
    return this._http.post(environment.apiUrl + this.getdocs_datalisturl, body, this.httpOptions)
  }

}
