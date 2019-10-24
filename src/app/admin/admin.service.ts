import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getsettingslisturl = 'api/get-settings-list';
  editsettingsurl = 'api/edit-settings';

  public httpOptions = {
    headers: new HttpHeaders({
      'userId': localStorage.getItem('UserId'),
      'authToken': localStorage.getItem('AuthToken')
    })
  };

  constructor(private _http: HttpClient) { }

  public getsettingslist() {
    return this._http.get(environment.apiUrl + this.getsettingslisturl, this.httpOptions);
  }

  public editsettings(data) {
    return this._http.post(environment.apiUrl + this.editsettingsurl, data, this.httpOptions);
  }

}
