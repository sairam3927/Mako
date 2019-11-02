import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  public httpOptions = {
    headers: new HttpHeaders({
      'userId':  localStorage.getItem('UserId') ,
      'authToken': localStorage.getItem('AuthToken')
    })
  };

  private getorderslisturl = 'api/get-orders-list';
  private addorders_registurl = 'api/add-orders_regist';
  private editordersurl = 'api/edit-orders';
  private deleteorderurl = 'api/delete-order';
  private addregistrationurl = 'api/add-registration';
  private checkrecievedurl = 'api/check-recieved';

  private getgenderslisturl = 'api/get-gender-list';
  private getethnicitylisturl = 'api/get-ethinicity-list';
  private getcountrieslisturl = 'api/get-countries-list';
  private getnationalitylisturl = 'api/get-nationality-list';
  private getstate_provincelisturl = 'api/get-state_province-list';

  private addorder_docscsvurl = 'api/add-order_docs-csv';
  private getdocs_datalisturl = 'api/get-docs_data-list';

  constructor(private _http: HttpClient) { }

  public getorderslist() {
    let httpOptions = {
      headers: new HttpHeaders({
        'userId':  localStorage.getItem('UserId') ,
        'authToken': localStorage.getItem('AuthToken')
      })
    };
    console.log("localStorage.getItem('UserId')",localStorage.getItem('UserId'));
    console.log("localStorage.getItem('AuthToken')",localStorage.getItem('AuthToken'));
    return this._http.get(environment.apiUrl + this.getorderslisturl, httpOptions)
  }
  public addorders_regist(data) {
    return this._http.post(environment.apiUrl + this.addorders_registurl, data, this.httpOptions)
  }
  public editorders(data) {
    return this._http.post(environment.apiUrl + this.editordersurl, data, this.httpOptions)
  }
  public deleteorder(data) {
    return this._http.post(environment.apiUrl + this.deleteorderurl, data, this.httpOptions)
  }
  public addregistration(body) {
    return this._http.post(environment.apiUrl + this.addregistrationurl, body)
  }
  public checkrecieved(body) {
    return this._http.post(environment.apiUrl + this.checkrecievedurl, body)
  }


  public getgenderslist() {
    return this._http.get(environment.apiUrl + this.getgenderslisturl)
  }
  public getethnicitylist() {
    return this._http.get(environment.apiUrl + this.getethnicitylisturl)
  }
  public getcountrieslist() {
    return this._http.get(environment.apiUrl + this.getcountrieslisturl)
  }
  public getnationalitylist() {
    return this._http.get(environment.apiUrl + this.getnationalitylisturl)
  }
  public getstate_provincelist(data) {
    return this._http.post(environment.apiUrl + this.getstate_provincelisturl,data)
  }

  public addorder_docscsv(body){
    return this._http.post(environment.apiUrl + this.addorder_docscsvurl,body, this.httpOptions)
  }
  public getdocs_datalist(body){
    return this._http.post(environment.apiUrl + this.getdocs_datalisturl,body, this.httpOptions)
  }

}
