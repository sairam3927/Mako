import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import { AlertService } from '../../shared/services/alert.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-otp-reset-password',
  templateUrl: './otp-reset-password.component.html',
  styleUrls: ['./otp-reset-password.component.scss'],
  providers: [AlertService]
})
export class OtpResetPasswordComponent implements OnInit {


  public form: FormGroup;
  public settings: Settings;
  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router,
    public loginService: LoginService, public alertService: AlertService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'otp': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  onSubmit(values: Object): void {
    
    if (this.form.valid) {
      let body = {
        "Email": localStorage.getItem('email'),
        "OTP": values['otp']
      }
      console.log(body, "body");
      this.loginService.validateforgotpasswordotp(body).subscribe(
        data => {
          console.log(data)

          if (data['Success'] == true) {
            this.router.navigate(['/reset/:id']);
            this.alertService.createAlert(data['Message'], 1);
          } else {
            this.alertService.createAlert(data['Message'], 0);
          }

        }
      );

    }

  }

}
