import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator ,matchingPasswords} from 'src/app/theme/utils/app-validators';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [AlertService]
})
export class ResetPasswordComponent implements OnInit {

  public TypeString:string="password";
  public form: FormGroup;
  public settings: Settings;
  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router,public alertService:AlertService){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'password': [null,Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirmPassword': [null,Validators.compose([Validators.required, Validators.minLength(8)])]
    },{validator: matchingPasswords('password', 'confirmPassword')});
  }

  ngOnInit() {
  }

  onSubmit(emailId:Object):void {
    if (this.form.valid) {
      this.alertService.createAlert('Password Reset Successful!', 1);
      this.router.navigate(['/login']);
    }
    
  }

}
