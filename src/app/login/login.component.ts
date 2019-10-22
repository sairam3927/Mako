import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../theme/utils/app-validators';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { AlertService } from '../shared/services/alert.service';
import { LoginService } from './login.service';
import { response } from './permissions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AlertService]
})
export class LoginComponent implements OnInit {



  public TypeString: string = "password";
  public isPassword: boolean = true;

  public form: FormGroup;
  public settings: Settings;
  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, public alertService: AlertService,
    public loginService: LoginService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
    let permissions = response.Permissions;
    // console.log("permissions", permissions)
    localStorage.setItem('Permissions', JSON.stringify(permissions));
    var retrievedObject = localStorage.getItem('Permissions');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
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
          console.log(data)
          let Response = data['Response'];

          if (Response['Success'] == true) {
            this.router.navigate(['/mako']);
            this.alertService.createAlert(Response['Message'], 1)
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