import { Component, OnInit, enableProdMode } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { emailValidator, matchingPasswords } from 'src/app/theme/utils/app-validators';
import { AlertService } from '../../shared/services/alert.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [AlertService]
})
export class ResetPasswordComponent implements OnInit {

  email : any;

  public TypeString: string = "password";
  public form: FormGroup;
  public settings: Settings;

  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, private route: ActivatedRoute,
    public loginService: LoginService, public alertService: AlertService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirmPassword': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    }, { validator: matchingPasswords('password', 'confirmPassword') });
  }

  ngOnInit() {
    // enableProdMode()
    // let id: string = this.route.snapshot.queryParamMap.get('');
    let id = this.route.snapshot.params.id
    this.email = id
    console.log("covert id", this.email, id);
    this.settings.loadingSpinner = false;
  }

  onSubmit(values: Object): void {
    let body = {};
    console.log(values);
    if (this.email != ':id') {
      body = {
        "OTP": this.email,
        "Password": values['password']
      }
    } else {
      body = {
        "Email": localStorage.getItem('email'),
        "Password": values['password']
      }
    }

    if (this.form.valid) {

      console.log(body, "body");
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
