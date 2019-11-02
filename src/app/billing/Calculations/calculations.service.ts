import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  public httpOptions = {
    headers: new HttpHeaders({
      'userId': localStorage.getItem('UserId'),
      'authToken': localStorage.getItem('AuthToken')
    })
  };

  private getpltableurl = '/api/get-pl-table';
  private getantableurl = '/api/get-an-table';

  constructor(private _http: HttpClient) { }

  public getpltable() {
    return this._http.get(environment.apiUrl + this.getpltableurl, this.httpOptions)
  }
  public getantable() {
    return this._http.get(environment.apiUrl + this.getantableurl, this.httpOptions)
  }
}
