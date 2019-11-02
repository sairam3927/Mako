import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../theme/utils/app-validators';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { AlertService } from '../shared/services/alert.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AlertService]
})
export class LoginComponent implements OnInit {

  public TypeString: string = "password";
  public isPassword: boolean = true;
  public imagepath = '../assets/img/mako_logo.png'
  public form: FormGroup;
  public settings: Settings;
  UserId: any;
  AuthToken: any;
  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, public alertService: AlertService,
    public loginService: LoginService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {

  }

  public onSubmit(values: Object): void {
    console.log(this.form.value);
    // console.log(this.form.value['email']);
    // console.log(this.form.value['password']);
    if (values['email'] != "" && values['password'] != "") {
      if (this.form.valid) {
        let body = {
          "Email": values['email'],
          "Password": values['password']
        }
        console.log(body, "body");
        this.loginService.userlogin(body).subscribe(
          data => {
            console.log(data, 'loginData')

            let Response = data['Response'];
            this.UserId = data['UserId'];
            this.AuthToken = data['AuthToken'];

            console.log(data['Permissions'], 'data["Permissions"]');
            localStorage.setItem('UserId', this.UserId);
            localStorage.setItem('AuthToken', this.AuthToken);
            localStorage.setItem('Permissions', JSON.stringify(data['Permissions']));

            if (Response['Success'] == true) {
              this.alertService.createAlert(Response['Message'], 1)
              if (data['UserType'] == 'User') {
                this.router.navigate(['/mako']);
                setTimeout(function () { window.location.reload() }, 300);
              } else {
                console.log('patient dash board');
                this.router.navigate(['patient-dashboard']);
              }

              localStorage.setItem('email', values['email']);


            } else {
              this.alertService.createAlert(Response['Message'], 0);
            }

          }
        );

      }
    }else if (values['email'] == "" && values['password'] == "" ) {
      this.alertService.createAlert('please enter email id & password', 0);
    }else if (values['email'] == "") {
      this.alertService.createAlert('please enter email id', 0);
    } else if (values['password'] == "") {
      this.alertService.createAlert('please enter password', 0);
    }

  }

  public ChangetextType(isPassword) {
    if (isPassword) {
      this.TypeString = "password"
    } else {
      this.TypeString = "text"
    }
  }

  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }
}