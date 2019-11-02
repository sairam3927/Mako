import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingList: any;
  public popoverStatusTitle: string = 'Confirm Save Change';
  public popoverStatusMessage: string = 'Are you sure you want to save changes.?';
  public cancelClicked: boolean = false;
  Form: FormGroup;

  constructor(private _fb: FormBuilder, private alertService: AlertService, public adminService: AdminService) {
    this.Form = this._fb.group({
      'newValue': new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
    });
  }

  ngOnInit() {
    this.getSetting();
  }

  getSetting() {
    this.adminService.getsettingslist().subscribe(
      data => {
        console.log(data)
        this.settingList = data['data'];
      }
    );
  }

  editsettings(id) {

    let body = {
      "SettingId": id,
      "NewValue": this.Form.value.newValue
    }

    if (this.Form.value.newValue == null) {
      this.alertService.createAlert('Please Enter Value', 0);
    } else {
      console.log(body, 'body');
      this.adminService.editsettings(body).subscribe(
        data => {
          console.log('add/update response', data)
          this.getSetting();
          if (data['Success'] == true) {
            this.alertService.createAlert(data['Message'], 1);
          } else {
            this.alertService.createAlert(data['Message'], 0);
          }
        }
      );
    }

  }

  numberOnly(event): boolean {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    const charCode = (event.which) ? event.which : event.keyCode;
    if (!pattern.test(inputChar) && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  noWhiteSpaceValidator(control: FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid = !isWhiteSpace;
    return isValid ? null : { 'whitespace': true };
  }

}
