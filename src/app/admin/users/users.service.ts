import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    getUsersUrl = "api/get-user-list";
    upsertuserurl = 'api/upsert-user';
    updateuserstatusurl = 'api/update-user-status';
    deleteuserurl = 'api/delete-user';

    getuserpermissionsurl = 'api/get-user-permissions';
    saveuserpermissionsurl = 'api/save-user-permissions';

    public httpOptions = {
        headers: new HttpHeaders({
            'userId': localStorage.getItem('UserId'),
            'authToken': localStorage.getItem('AuthToken')
        })
    };

    constructor(private _http: HttpClient) { }

    public getUser() {
        return this._http.get(environment.apiUrl + this.getUsersUrl, this.httpOptions);
    }

    public upsertuser(data) {
        return this._http.post(environment.apiUrl + this.upsertuserurl, data, this.httpOptions);
    }

    public updateuserstatus(data) {
        return this._http.post(environment.apiUrl + this.updateuserstatusurl, data, this.httpOptions);
    }

    public deleteuser(data) {
        return this._http.post(environment.apiUrl + this.deleteuserurl, data, this.httpOptions);
    }

    //Permission Screen.
    public getuserpermissions(data) {
        return this._http.post(environment.apiUrl + this.getuserpermissionsurl, data, this.httpOptions);
    }
    public saveuserpermissions(data) {
        return this._http.post(environment.apiUrl + this.saveuserpermissionsurl, data, this.httpOptions);
    }


} 