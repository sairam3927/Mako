import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';
import { AnalyticsService } from 'src/app/analytics/analytics.service';

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
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      DateofBirth: new FormControl('', [Validators.required]),
      Gender: new FormControl('', [Validators.required]),
      PregnantLactating: new FormControl(false, [Validators.required]),
      Nationality: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      StreetAddress: new FormControl('', [Validators.required]),
      Country: new FormControl('', [Validators.required]),
      StateProvince: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
      ZipCodePostalCode: new FormControl('', [Validators.required]),
      SampleName: new FormControl('', [Validators.required]),
      MobileNo: new FormControl('', [Validators.required]),
      Ethnicity: new FormControl('', [Validators.required]),
      FEDEXAWB: new FormControl('', [Validators.required]),
    })

  }

  async ngOnInit() {
    await this.getValues();

    if (this.action == 'Update') {

      await this.getProvince(this.item.Country);
      console.log(this.item,"itemaaa");

      this.addOrderForm = this.fb.group({
        FirstName: new FormControl(this.item.FirstName, [Validators.required]),
        LastName: new FormControl(this.item.LastName, [Validators.required]),
        DateofBirth: new FormControl(this.item.DateOfBirth, [Validators.required]),
        Gender: new FormControl(this.item.Gender, [Validators.required]),
        PregnantLactating: new FormControl(this.item.Pregnant_Lactate, [Validators.required]),
        Nationality: new FormControl(this.item.Nationality, [Validators.required]),
        Email: new FormControl(this.item.Email, [Validators.required]),
        StreetAddress: new FormControl(this.item.StreetAddress, [Validators.required]),
        Country: new FormControl(this.item.Country, [Validators.required]),
        StateProvince: new FormControl(this.item.State_Province, [Validators.required]),
        City: new FormControl(this.item.City, [Validators.required]),
        ZipCodePostalCode: new FormControl(this.item.ZipCode_PostalCode, [Validators.required]),
        SampleName: new FormControl(this.item.SampleName, [Validators.required]),
        MobileNo: new FormControl(this.item.MobileNumber, [Validators.required]),
        Ethnicity: new FormControl(this.item.Ethnicity, [Validators.required]),
        FEDEXAWB: new FormControl(this.item.Fedex_Awb, [Validators.required]),
      })
      console.log('form Data', this.formData);
    }
    console.log("Section ID", this.id);
    console.log("this is child action", this.action);
  }

  addOrder() {
    this.formValue = this.addOrderForm.value;
    console.log("values:", this.formValue);

    if (this.formValue['Gender'] == 1){
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
    console.log("body",body)
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
