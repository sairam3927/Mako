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
      FirstName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      LastName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      DateofBirth: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Gender: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      PregnantLactating: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Nationality: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Email: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      StreetAddress: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Country: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      StateProvince: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      City: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      ZipCodePostalCode: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      SampleName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      MobileNo: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Ethnicity: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      FEDEXAWB: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
    })

  }

  ngOnInit() {
    this.getValues();
    if (this.action == 'Update') {

      this.addOrderForm = this.fb.group({
        FirstName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        LastName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        DateofBirth: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        Gender: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        PregnantLactating: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        Nationality: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        Email: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        StreetAddress: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        Country: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        StateProvince: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        City: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        ZipCodePostalCode: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        SampleName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        MobileNo: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        Ethnicity: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
        FEDEXAWB: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      })
      console.log('form Data', this.formData);
    }
    console.log("Section ID", this.id);
    console.log("this is child action", this.action);
  }

  addScope() {
    this.formValue = this.addOrderForm.value;
    console.log("values:", this.formValue);

    this.gridObject = {
      "FirstName": this.formValue['FirstName'],
      "LastName": this.formValue['LastName'],
      "Email": this.formValue['Email'],
      "Nationality": this.formValue['Nationality'],
      "Gender": this.formValue['Gender'],
      "DateOfBirth": this.formValue['AlleleName'],
      "Country": this.formValue['AlleleName'],
      "State_Province": this.formValue['AlleleName'],
      "City": this.formValue['AlleleName'],
      "StreetAddress": this.formValue['AlleleName'],
      "ZipCode_PostalCode": this.formValue['AlleleName'],
      "Ethnicity": this.formValue['AlleleName'],
      "SampleName": this.formValue['AlleleName'],
      "MobileNumber": this.formValue['AlleleName'],
      "Fedex_Awb": this.formValue['AlleleName']
    };
    console.log("Entered data", this.gridObject);
    this.close()

    this.analyticsService.editorders(this.gridObject).subscribe(
      data => {
        console.log('add/update response', data)
        if (data['Status'] == true) {
          this.alertService.createAlert('Successfully Updated', 1);
        } else {
          this.alertService.createAlert('Something Went Wrong', 0);
        }
        this.close()
      }
    );

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
        this.GendersList = data['GendersList'];
      }
    );

    this.analyticsService.getethnicitylist().subscribe(
      data => {
        console.log(data)
        this.EthnicityList = data['EthnicityList'];
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
        this.NationalityList = data['NationalityList'];
      }
    );
    this.analyticsService.getstate_provincelist().subscribe(
      data => {
        console.log(data)
        this.State_Province_List = data['State_Province_List'];
      }
    );

  }

}
