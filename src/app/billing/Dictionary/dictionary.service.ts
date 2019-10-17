import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  getscopelisturl = 'api/get-scope-list';
  editscopeurl = 'api/edit-scope';
  deletescopeurl = 'api/delete-scope';
  checkactivescopeurl = 'api/check-active-scope';

  DRIgetsectionslisturl = 'api/get-dri-list';
  DRIeditsectionsurl = 'api/edit-dri';
  DRIdeletesectionurl = 'api/delete-dri';

  Sectionsgetlisturl = 'api/get-sections-list';
  Sectionsediturl = 'api/edit-sections';
  Sectionsdeleteurl = 'api/delete-section';

  getnutrients_conditionslisturl = 'api/get-nutrients_conditions-list';
  editnutrients_conditionsurl = 'api/edit-nutrients_conditions';
  deletenutrients_conditionsurl = 'api/delete-nutrients_conditions';

  getSequence_results_masterlisturl = 'api/get-sequence_results_master-list';
  editSequence_results_masterurl = 'api/edit-sequence_results_master';
  deletesequence_results_masterurl = 'api/delete-sequence_results_master';
  upsertsequence_results_mastercsvurl = 'api/upsert-sequence_results_master-csv';

  getmessageslisturl = 'api/get-messages-list';
  editmessagesurl = 'api/edit-messages';
  deletemessageurl = 'api/delete-message';

  savepersonaldataurl = 'api/save-personal-data';
  genderlisturl = 'api/get-gender-list';
  ethinicitylisturl = 'api/get-ethinicity-list';
  getlastpersonaldataurl = 'api/get-last-personal-data';

  gettestslisturl = 'api/get-tests-list';
  edittestsurl = 'api/edit-tests';
  deletetestsurl = 'api/delete-tests';

  constructor(private _http: HttpClient) { }

  public getscopelist() {
    return this._http.get(environment.apiUrl + this.getscopelisturl)
  }
  public editscope(data) {
    return this._http.post(environment.apiUrl + this.editscopeurl,data)
  }
  public deletescope(data) {
    return this._http.post(environment.apiUrl + this.deletescopeurl,data)
  }
  public checkactivescope(data) {
    return this._http.post(environment.apiUrl + this.checkactivescopeurl,data)
  }

  public DRIgetsectionslist() {
    return this._http.get(environment.apiUrl + this.DRIgetsectionslisturl)
  }
  public DRIeditsections(data) {
    return this._http.post(environment.apiUrl + this.DRIeditsectionsurl,data)
  }
  public DRIdeletesection(data) {
    return this._http.post(environment.apiUrl + this.DRIdeletesectionurl,data)
  }

  public Sectionsgetlist() {
    return this._http.get(environment.apiUrl + this.Sectionsgetlisturl)
  }
  public Sectionsedit(data) {
    return this._http.post(environment.apiUrl + this.Sectionsediturl,data)
  }
  public Sectionsdelete(data) {
    return this._http.post(environment.apiUrl + this.Sectionsdeleteurl,data)
  }

  public getnutrients_conditionslist() {
    return this._http.get(environment.apiUrl + this.getnutrients_conditionslisturl)
  }
  public editnutrients_conditions(data) {
    return this._http.post(environment.apiUrl + this.editnutrients_conditionsurl,data)
  }
  public deletenutrients_conditions(data) {
    return this._http.post(environment.apiUrl + this.deletenutrients_conditionsurl,data)
  }

  public getSequence_results_masterlist() {
    return this._http.get(environment.apiUrl + this.getSequence_results_masterlisturl)
  }
  public editSequence_results_master(data) {
    return this._http.post(environment.apiUrl + this.editSequence_results_masterurl,data)
  }
  public deletesequence_results_master(data) {
    return this._http.post(environment.apiUrl + this.deletesequence_results_masterurl,data)
  }
  public upsertsequence_results_mastercsv(data) {
    return this._http.post(environment.apiUrl + this.upsertsequence_results_mastercsvurl,data)
  }

  public getmessageslist() {
    return this._http.get(environment.apiUrl + this.getmessageslisturl)
  }
  public editmessages(data) {
    return this._http.post(environment.apiUrl + this.editmessagesurl,data)
  }
  public deletemessage(data) {
    return this._http.post(environment.apiUrl + this.deletemessageurl,data)
  }

  public gettestslist() {
    return this._http.get(environment.apiUrl + this.gettestslisturl)
  }
  public edittests(data) {
    return this._http.post(environment.apiUrl + this.edittestsurl,data)
  }
  public deletetests(data) {
    return this._http.post(environment.apiUrl + this.deletetestsurl,data)
  }


  public getlastpersonaldata() {
    return this._http.get(environment.apiUrl + this.getlastpersonaldataurl)
  }
  public savepersonaldata(data) {
    return this._http.post(environment.apiUrl + this.savepersonaldataurl,data)
  }
  public genderlist() {
    return this._http.get(environment.apiUrl + this.genderlisturl)
  }
  public ethinicitylist() {
    return this._http.get(environment.apiUrl + this.ethinicitylisturl)
  }

}
