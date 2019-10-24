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

  imagepath = '../../../../assets/img/mako_logo.png';

  public TypeString: string = "password";
  public isPassword: boolean = true;

  public form: FormGroup;
  public settings: Settings;
  UserId: any;
  AuthToken: any;
  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, public alertService: AlertService,
    public loginService: LoginService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {

  }



  public onSubmit(values: Object): void {
    if (this.form.valid) {
      let body = {
        "Email": values['email'],
        "Password": values['password']
      }
      console.log(body, "body");
      this.loginService.userlogin(body).subscribe(
        data => {
          console.log(data, 'data')
          localStorage.setItem('Permissions', JSON.stringify(''));

          let Response = data['Response'];
          this.UserId = data['UserId'];
          this.AuthToken = data['AuthToken'];

          // console.log(this.UserId, 'this.UserId');
          // console.log(this.AuthToken, 'this.AuthToken');
          console.log(data['Permissions'], 'data["Permissions"]');
          localStorage.setItem('UserId', this.UserId);
          localStorage.setItem('AuthToken', this.AuthToken);
          localStorage.setItem('Permissions', JSON.stringify(data['Permissions']));

          if (Response['Success'] == true) {
            this.alertService.createAlert(Response['Message'], 1)
            this.router.navigate(['/mako']);
            localStorage.setItem('email', values['email']);
          } else {
            this.alertService.createAlert(Response['Message'], 0);
          }

        }
      );

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