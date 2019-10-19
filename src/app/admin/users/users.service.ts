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

<<<<<<< HEAD
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
=======
    

    public getUsersUrl = "api/get-user-list";
    public upsertuserurl = 'api/upsert-user';
    public updateuserstatusurl = 'api/update-user-status';
    public deleteuserurl = 'api/delete-user';

    public getuserpermissionsurl = 'api/get-user-permissions';
    public saveuserpermissionsurl = 'api/save-user-permissions';
    
    constructor(private _http: HttpClient) { }

    getUser() {
        return this._http.get(environment.apiUrl + this.getUsersUrl);
    }

    upsertuser(data) {
        return this._http.post(environment.apiUrl + this.upsertuserurl, data);
    }

    updateuserstatus(data) {
        return this._http.post(environment.apiUrl + this.updateuserstatusurl, data);
    }

    deleteuser(data) {
>>>>>>> 6e95d525468b7e1898a2dc0e47e03741e2389243
        return this._http.post(environment.apiUrl + this.deleteuserurl, data);
    }

    //Permission Screen.
<<<<<<< HEAD
    public getuserpermissions(data) {
        return this._http.post(environment.apiUrl + this.getuserpermissionsurl,data);
    }

    public saveuserpermissions(data) {
=======
    getuserpermissions() {
        return this._http.get(environment.apiUrl + this.getuserpermissionsurl);
    }

    saveuserpermissions(data) {
>>>>>>> 6e95d525468b7e1898a2dc0e47e03741e2389243
        return this._http.post(environment.apiUrl + this.saveuserpermissionsurl, data);
    }


} 