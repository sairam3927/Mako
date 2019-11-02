import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public httpOptions = {
    headers: new HttpHeaders({
      'userId':  localStorage.getItem('UserId') ,
      'authToken': localStorage.getItem('AuthToken')
    })
  };

  private getdashboardlisturl = 'api/get-dashboard-list';
  private getorderscountyearlyurl = 'api/get-orders-count-yearly';

  constructor(private _http: HttpClient) { }

  public getdashboardlist() {
    return this._http.get(environment.apiUrl + this.getdashboardlisturl)
  }
  public getorderscountyearly() {
    return this._http.get(environment.apiUrl + this.getorderscountyearlyurl)
  }
}
