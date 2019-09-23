import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppSettings } from '../app.settings';
import { emailValidator, matchingPasswords } from '../theme/utils/app-validators';
import { Settings } from '../app.settings.model';
import { AlertService } from '../shared/services/alert.service';

export interface Sample {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AlertService]
})
export class RegisterComponent implements OnInit {
  selectedValueStepType: string= "0";
  public form: FormGroup;
  public settings: Settings;
  ethnicitys: Sample[] = [
    { value: '0', viewValue: 'Non-Hispanic White' },
    { value: '1', viewValue: 'Hispanic' },
    { value: '2', viewValue: 'African American' },
    { value: '3', viewValue: 'Asian' },
    { value: '4', viewValue: 'Others' }
  ];
  countries: Sample[] = [
    { value: '0', viewValue: 'Cananda' },
    { value: '1', viewValue: 'USA' }
   
  ];
  states: Sample[] = [
    { value: '0', viewValue: 'Alberta' },
    { value: '1', viewValue: 'British Columbia' },
    { value: '2', viewValue: 'Manitoba' },
    { value: '3', viewValue: 'New Brunswick' },
    { value: '4', viewValue: 'Newfoundland and Labrador' },
    { value: '5', viewValue: 'Northwest Territories' },
    { value: '6', viewValue: 'Nova Scotia' },
    { value: '7', viewValue: 'Nunavut' },
    { value: '8', viewValue: 'Ontario' },
    { value: '9', viewValue: 'Prince Edward Island' },
    { value: '10', viewValue: 'Quebec' },
    { value: '11', viewValue: 'Saskatchewan' },
    { value: '12', viewValue: 'Yukon' }
   
  ];
  cities: Sample[] = [
    { value: '0', viewValue: 'Edmonton' },
    { value: '1', viewValue: 'Victoria' },
    { value: '2', viewValue: 'Winnipeg' },
    { value: '3', viewValue: 'Fredericton' },
    { value: '4', viewValue: 'St. Johns' },
    { value: '5', viewValue: 'Halifax' },
    { value: '6', viewValue: 'Toronto' },
    { value: '7', viewValue: 'Charlottetown' },
    { value: '8', viewValue: 'Quebec City' },
    { value: '9', viewValue: 'Regina' },
    { value: '10', viewValue: 'Yellowknife' },
    { value: '11', viewValue: 'Iqaluit' },
    { value: '12', viewValue: 'Whitehorse' }
   
  ];
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

  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, public alertService: AlertService) {
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
  public onRegister(values: Object): void {
    this.alertService.createAlert("Register Successful", 1)
  }

  ngOnInit() {

    // this.settings.loadingSpinner = false;
  }

}
