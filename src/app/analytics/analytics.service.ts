import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private getorderslisturl = 'api/get-orders-list';
  private addorders_registurl = 'api/add-orders_regist';
  private editordersurl = 'api/edit-orders';
  private deleteorderurl = 'api/delete-order';

  private getgenderslisturl = 'api/get-gender-list';
  private getethnicitylisturl = 'api/get-ethinicity-list';
  private getcountrieslisturl = 'api/get-countries-list';
  private getnationalitylisturl = 'api/get-nationality-list';
  private getstate_provincelisturl = 'api/get-state_province-list';

  constructor(private _http: HttpClient) { }

  public getorderslist() {
    return this._http.get(environment.apiUrl + this.getorderslisturl)
  }
  public addorders_regist(data) {
    return this._http.post(environment.apiUrl + this.addorders_registurl, data)
  }
  public editorders(data) {
    return this._http.post(environment.apiUrl + this.editordersurl, data)
  }
  public deleteorder(data) {
    return this._http.post(environment.apiUrl + this.deleteorderurl, data)
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

}
