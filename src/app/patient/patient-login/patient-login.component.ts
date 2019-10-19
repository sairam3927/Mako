import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';


@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.scss'],
  providers:[AlertService]
})

export class PatientLoginComponent  {
  imagePath = '../../../../assets/img/mako_logo.png';
  
  public TypeString:string="password";
  public isPassword:boolean=true;
  
    public form:FormGroup;
    public settings: Settings;
    constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router,public alertService:AlertService){
      this.settings = this.appSettings.settings; 
      this.form = this.fb.group({
        'email': [null, Validators.compose([Validators.required, emailValidator])],
        'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
      });
    }
  
    public onSubmit(values:Object):void {
      if (this.form.valid) {
        if (values['email'] == 'patient@mako.com' && values['password'] == 'Password1!1') {
          this.router.navigate(['/patient-dashboard']);
          this.alertService.createAlert("Login Success",1)
        }
        else {
          this.alertService.createAlert("Invalid Credentials",0);
        }
      }
    }
  
    public ChangetextType(isPassword){
  if(isPassword){
    this.TypeString="password"
  }else{
    this.TypeString="text"
  }
    }
  
    ngAfterViewInit(){
      this.settings.loadingSpinner = false; 
    }

}
