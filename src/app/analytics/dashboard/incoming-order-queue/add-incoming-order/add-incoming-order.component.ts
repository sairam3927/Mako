import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';
import { AnalyticsService } from 'src/app/analytics/analytics.service';
import { emailValidator } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-add-incoming-order',
  templateUrl: './add-incoming-order.component.html',
  styleUrls: ['./add-incoming-order.component.scss']
})
export class AddIncomingOrderComponent implements OnInit {

  id: any;
  action: any;
  item: any;
  GendersList: any;
  EthnicityList: any;
  CountryList: any;
  NationalityList: any;
  State_Province_List: any;
  submit= false;

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

  constructor(public alertService: AlertService, public dialogRef: MatDialogRef<AddIncomingOrderComponent>,
    public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public order: any, private analyticsService: AnalyticsService) {

    this.addOrderForm = this.fb.group({
      FirstName: new FormControl('', Validators.compose([Validators.required])),
      LastName: new FormControl('', Validators.compose([Validators.required])),
      DateofBirth: new FormControl( Date(), Validators.compose([Validators.required])),
      Gender: new FormControl('', Validators.compose([Validators.required])),
      PregnantLactating: new FormControl(false, Validators.compose([Validators.required])),
      Nationality: new FormControl('', Validators.compose([Validators.required])),
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

    if (this.action == 'Update') {

      if (this.item.Gender == 2) {
        this.setradio('Female');
      }

      await this.getProvince(this.item.Country);
      console.log(this.item, "itemaaa");

      this.addOrderForm = this.fb.group({
        FirstName: new FormControl(this.item.FirstName, Validators.compose([Validators.required])),
        LastName: new FormControl(this.item.LastName, Validators.compose([Validators.required])),
        DateofBirth: new FormControl(this.item.DateOfBirth, Validators.compose([Validators.required])),
        Gender: new FormControl(this.item.Gender, Validators.compose([Validators.required])),
        PregnantLactating: new FormControl(this.item.Pregnant_Lactate, Validators.compose([Validators.required])),
        Nationality: new FormControl(this.item.Nationality, Validators.compose([Validators.required])),
        Email: new FormControl(this.item.Email, Validators.compose([Validators.required, emailValidator])),
        StreetAddress: new FormControl(this.item.StreetAddress, Validators.compose([Validators.required])),
        Country: new FormControl(this.item.Country, Validators.compose([Validators.required])),
        StateProvince: new FormControl(this.item.State_Province, Validators.compose([Validators.required])),
        City: new FormControl(this.item.City, Validators.compose([Validators.required])),
        ZipCodePostalCode: new FormControl(this.item.ZipCode_PostalCode, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])),
        SampleName: new FormControl(this.item.SampleName, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])),
        MobileNo: new FormControl(this.item.MobileNumber, Validators.compose([Validators.required])),
        Ethnicity: new FormControl(this.item.Ethnicity, Validators.compose([Validators.required])),
        FEDEXAWB: new FormControl(this.item.Fedex_Awb, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])),
      })
      console.log('form Data', this.formData);
    }
    console.log("Section ID", this.id);
    console.log("this is child action", this.action);
  }

  addOrder(submit) {
    this.submit = submit;
    if (this.addOrderForm.valid) {

      this.formValue = this.addOrderForm.value;
      console.log("values:", this.formValue);

      const today = new Date();
      const birthDay = this.formValue['DateofBirth'];
      console.log("birthDay",birthDay);
      let age = today.getFullYear() - birthDay.getFullYear();
      const m = today.getMonth() - birthDay.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate())) {
        age--;
      }
      console.log(age, "age");
      if (age >= 18) {

        if (this.formValue['Gender'] == 1) {
          this.formValue['PregnantLactating'] = false;
        }

        if (this.action == 'Update') {

          this.gridObject = {
            "OrdersId": this.id,
            "FirstName": this.formValue['FirstName'],
            "LastName": this.formValue['LastName'],
            "Email": this.formValue['Email'],
            "Nationality": this.formValue['Nationality'],
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
          console.log(this.gridObject);
          this.analyticsService.editorders(this.gridObject).subscribe(
            data => {
              console.log('add/update response', data)
              if (data['Success'] == true) {
                this.alertService.createAlert('Successfully Updated', 1);
              } else {
                this.alertService.createAlert('Something Went Wrong', 0);
              }
              this.close()
            }
          );

        } else {
          this.gridObject = {

            "FirstName": this.formValue['FirstName'],
            "LastName": this.formValue['LastName'],
            "Email": this.formValue['Email'],
            "Nationality": this.formValue['Nationality'],
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
          console.log(this.gridObject);
          this.analyticsService.addorders_regist(this.gridObject).subscribe(
            data => {
              console.log('add/update response', data)
              if (data['Success'] == true) {
                this.alertService.createAlert('Successfully Updated', 1);
              } else {
                this.alertService.createAlert('Something Went Wrong', 0);
              }
              this.close()
            }
          );
        }

        console.log("Entered data", this.gridObject);
        this.close()
      } else {
        this.alertService.createAlert('Age should be geater than 18', 0);
      }

    } else {
      if (this.formValue['FirstName'] == null || this.formValue['LastName'] == null || this.formValue['Email'] == null || this.formValue['Nationality'] == null || this.formValue['Gender'] == null || this.formValue['DateofBirth'] == null || this.formValue['Country'] == null || this.formValue['StateProvince'] == null || this.formValue['City'] == null || this.formValue['StreetAddress'] == null || this.formValue['ZipCodePostalCode'] == null || this.formValue['Ethnicity'] == null || this.formValue['SampleName'] == null || this.formValue['MobileNo'] == null || this.formValue['FEDEXAWB']) {
        this.alertService.createAlert('All fields are mandatory', 0);
      } else {
        this.alertService.createAlert('Please enter valid data', 0);
      }

    }
  }

  close(): void {
    this.dialogRef.close();
  }
  noWhiteSpaceValidator(control: FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid = !isWhiteSpace;
    return isValid ? null : { 'whitespace': true };
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

}
