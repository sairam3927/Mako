import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppSettings } from '../app.settings';
import { emailValidator } from '../theme/utils/app-validators';
import { Settings } from '../app.settings.model';
import { AlertService } from '../shared/services/alert.service';
import { AnalyticsService } from '../analytics/analytics.service';

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

  GendersList: any;
  EthnicityList: any;
  CountryList: any;
  NationalityList: any;
  State_Province_List: any;
  submit = false;

  public dateTime1: Date;
  public dateTime2: Date;
  public addOrderForm: FormGroup;
  public gridObject: any = {};
  public formValue: any = {};
  public formData: any = {};
  gender = ["Male", "Female", "Others"];
  selectedValueStepType: string = "0";
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

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

  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, public alertService: AlertService, private analyticsService: AnalyticsService) {

    this.addOrderForm = this.fb.group({
      FirstName: new FormControl('', Validators.compose([Validators.required])),
      LastName: new FormControl('', Validators.compose([Validators.required])),
      DateofBirth: new FormControl('', Validators.compose([Validators.required])),
      Gender: new FormControl('', Validators.compose([Validators.required])),
      PregnantLactating: new FormControl(false, Validators.compose([Validators.required])),
      Email: new FormControl('', Validators.compose([Validators.required, emailValidator])),
      StreetAddress: new FormControl('', Validators.compose([Validators.required])),
      Country: new FormControl('', Validators.compose([Validators.required])),
      StateProvince: new FormControl('', Validators.compose([Validators.required])),
      City: new FormControl('', Validators.compose([Validators.required])),
      ZipCodePostalCode: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])),
      SampleName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])),
      MobileNo: new FormControl('', Validators.compose([Validators.required])),
      Ethnicity: new FormControl('', Validators.compose([Validators.required])),
      FEDEXAWB: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])),
    })

  }
  async ngOnInit() {
    await this.getValues();
  }

  addOrder(submit) {
    this.submit = submit;

    this.formValue = this.addOrderForm.value;
    console.log("values:", this.formValue);

    if (this.addOrderForm.valid) {

      if (this.formValue['Gender'] == 1) {
        this.formValue['PregnantLactating'] = false;
      }

      this.gridObject = {
        "OrdersId": null,
        "FirstName": this.formValue['FirstName'],
        "LastName": this.formValue['LastName'],
        "Email": this.formValue['Email'],
        "Gender": this.formValue['Gender'],
        "Pregnant_Lactate": this.formValue['PregnantLactating'],
        "DateOfBirth": this.formValue['DateofBirth'],
        "Age": 0,
        "Country": this.formValue['Country'],
        "State_Province": this.formValue['StateProvince'],
        "City": this.formValue['City'],
        "StreetAddress": this.formValue['StreetAddress'],
        "ZipCode_PostalCode": this.formValue['ZipCodePostalCode'],
        "Ethnicity": this.formValue['Ethnicity'],
        "SampleName": this.formValue['SampleName'],
        "MobileNumber": this.formValue['MobileNo'],
        "Fedex_Awb": this.formValue['FEDEXAWB'],
        "OrderDate": new Date,
      };
      console.log(this.gridObject, 'this.gridObject');
      this.analyticsService.addregistration(this.gridObject).subscribe(
        data => {
          console.log('add/update response', data)
          if (data['Success'] == true) {
            this.alertService.createAlert('A link has been sent to your email ID to setup the password', 1);
            this.router.navigate(['/login']);
          } else {
            this.alertService.createAlert('Something Went Wrong', 0);
          }

        }
      );



      console.log("Entered data", this.gridObject);

    } else {
      if (this.formValue['FirstName'] == '' || this.formValue['LastName'] == '' || this.formValue['Email'] == '' ||
        this.formValue['Nationality'] == '' || this.formValue['Gender'] == '' || this.formValue['DateofBirth'] == '' ||
        this.formValue['Country'] == '' || this.formValue['StateProvince'] == '' || this.formValue['City'] == '' ||
        this.formValue['StreetAddress'] == '' || this.formValue['ZipCodePostalCode'] == '' || this.formValue['Ethnicity'] == '' ||
        this.formValue['SampleName'] == '' || this.formValue['MobileNo'] == '' || this.formValue['FEDEXAWB'] == '') {

        this.alertService.createAlert('All fields are mandatory', 0);

      } else {
        this.alertService.createAlert('Please enter valid data', 0);
      }

    }
  }

  getValues() {

    this.analyticsService.getgenderslist().subscribe(
      data => {
        console.log(data)
        this.GendersList = data['data'];
      }
    );

    this.analyticsService.getethnicitylist().subscribe(
      data => {
        console.log(data)
        this.EthnicityList = data['data'];
      }
    );
    this.analyticsService.getcountrieslist().subscribe(
      data => {
        console.log(data)
        this.CountryList = data['CountryList'];
      }
    );
    this.analyticsService.getnationalitylist().subscribe(
      data => {
        console.log(data)
        this.NationalityList = data['data'];
      }
    );

  }

  getProvince(e) {
    let body = {
      "CountryId": e
    }
    console.log("body", body)
    this.analyticsService.getstate_provincelist(body).subscribe(
      data => {
        console.log(data)
        this.State_Province_List = data['State_Province_List'];
      }
    );
  }

  public onRegister(values: Object): void {
    this.alertService.createAlert("Register Successful", 1)
  }

  numberOnly(event): boolean {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    const charCode = (event.which) ? event.which : event.keyCode;
    if (!pattern.test(inputChar) && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onlyAlphabats(event): boolean {
    const pattern = /[^A-Za-z ]/;
    let inputChar = String.fromCharCode(event.charCode);
    // const charCode = (event.which) ? event.which : event.keyCode;
    if (!pattern.test(inputChar) ) {
      return false;
    }
    return true;
  }

  noSpecialCharacters(event) {
    let arabicRegex = '[\u0600-\u06FF]';
    const e = <KeyboardEvent>event;
    if (e.key === 'Tab' || e.key === 'TAB') {
      return;
    }
    let k;
    k = event.keyCode;  // k = event.charCode;  (Both can be used)
    if ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57)) {
      return;
    }
    const ch = String.fromCharCode(e.keyCode);
    const regEx = new RegExp(arabicRegex);
    if (regEx.test(ch)) {
      return;
    }
    e.preventDefault();
  }



}
