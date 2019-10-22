import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class RawDataService {

  getrawdatalisturl = 'api/get-rawdata-list';
  deleterawdataurl = 'api/delete-rawdata';
  upload_raw_dataurl = 'api/upload_raw_data';

  public httpOptions = {
    headers: new HttpHeaders({
      'userId':  localStorage.getItem('UserId') ,
      'authToken': localStorage.getItem('AuthToken')
    })
  };

  constructor(private _http: HttpClient) { }

  public getrawdatalist() {
    return this._http.get(environment.apiUrl + this.getrawdatalisturl, this.httpOptions)
  }
  public deleterawdata(data) {
    return this._http.post(environment.apiUrl + this.deleterawdataurl,data, this.httpOptions)
  }
  public upload_raw_data(data) {
    return this._http.post(environment.apiUrl + this.upload_raw_dataurl,data, this.httpOptions)
  }

}
