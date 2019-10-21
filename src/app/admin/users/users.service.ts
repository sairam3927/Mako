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

    constructor(private _http: HttpClient) { }

    public getUser() {
        return this._http.get(environment.apiUrl + this.getUsersUrl);
    }

    public upsertuser(data) {
        return this._http.post(environment.apiUrl + this.upsertuserurl, data);
    }

    public updateuserstatus(data) {
        return this._http.post(environment.apiUrl + this.updateuserstatusurl, data);
    }

    public deleteuser(data) {
        return this._http.post(environment.apiUrl + this.deleteuserurl, data);
    }

    //Permission Screen.
    public getuserpermissions(data) {
        return this._http.post(environment.apiUrl + this.getuserpermissionsurl,data);
    }
    public saveuserpermissions(data) {
        return this._http.post(environment.apiUrl + this.saveuserpermissionsurl, data);
    }


} 