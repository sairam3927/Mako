import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import { AlertService } from '../../shared/services/alert.service';
import { MatSnackBar } from '@angular/material';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [AlertService]
})
export class ForgotPasswordComponent implements OnInit {


  public form: FormGroup;
  public settings: Settings;
  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, public snackBar: MatSnackBar,
    public loginService: LoginService, public alertService: AlertService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
    });
  }

  ngOnInit() {
  }

  onSubmit(values: Object): void {
    if (this.form.valid) {
      let body = {
        "Email": values['email'],
      }
      console.log(body,"body");
      this.loginService.forgotuserpassword(body).subscribe(
        data => {
          console.log(data)
          localStorage.setItem('email', values['email']);
          if (data['Success'] == true) {
            this.router.navigate(['/otp']);
            this.alertService.createAlert('OTP sent to your email sucessfully', 1);
          } else {
            this.alertService.createAlert(data['Message'], 0);
          }

        }
      );

    }

  }

}
