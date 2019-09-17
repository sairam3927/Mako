import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppSettings } from '../app.settings';
import { emailValidator, matchingPasswords } from '../theme/utils/app-validators';
import { Settings } from '../app.settings.model';
import { AlertService } from '../shared/services/alert.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[AlertService]
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public settings: Settings;
  private selectedLink: string = "Male";
  setradio(e: string): void {
    this.selectedLink = e;
  }
  isSelected(name: string): boolean {
    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }
    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }
  
  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router,public alertService:AlertService) {
    // this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    }, { validator: matchingPasswords('password', 'confirmPassword') });
  }

  // public onSubmit(values: Object): void {
  //   if (this.form.valid) {
  //     this.router.navigate(['/login']);
  //   }
  // }
  public onRegister(values:Object):void {
        this.alertService.createAlert("Register Successful",1)
  }

  ngOnInit() {

    // this.settings.loadingSpinner = false;
  }

}
