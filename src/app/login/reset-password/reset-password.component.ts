import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator ,matchingPasswords} from 'src/app/theme/utils/app-validators';
import { AlertService } from '../../shared/services/alert.service';
import { LoginService } from '../login.service';

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
  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router,
    public loginService: LoginService,public alertService:AlertService){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'password': [null,Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirmPassword': [null,Validators.compose([Validators.required, Validators.minLength(8)])]
    },{validator: matchingPasswords('password', 'confirmPassword')});
  }

  ngOnInit() {
  }

  onSubmit(values:Object):void {
    if (this.form.valid) {
      let body = {
        "Email" : values['email'],
        "Password" : values['password']
      }
      console.log(body,"body");
      this.loginService.udpateuserpassword(body).subscribe(
        data => {
          console.log(data)

          if (data['Success'] == true) {
            this.router.navigate(['/login']);
            this.alertService.createAlert(data['Message'], 1);
          } else {
            this.alertService.createAlert(data['Message'], 0);
          }

        }
      );
      
    }
    
  }

}
