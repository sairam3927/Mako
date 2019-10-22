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

  getpatientinfolisturl = 'api/get-patientinfo-list';
  getdocs_datalisturl = 'api/get-docs_data-list';

  constructor(private _http: HttpClient) { }

  public getpatientinfolist(body) {
    return this._http.post(environment.apiUrl + this.getpatientinfolisturl, body)
  }
  public getdocs_datalist(body) {
    return this._http.post(environment.apiUrl + this.getdocs_datalisturl, body)
  }

}
