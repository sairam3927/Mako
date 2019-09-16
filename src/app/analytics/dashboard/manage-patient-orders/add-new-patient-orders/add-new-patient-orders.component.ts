import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-new-patient-orders',
  templateUrl: './add-new-patient-orders.component.html',
  styleUrls: ['./add-new-patient-orders.component.scss']
})
export class AddNewPatientOrdersComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  addBasicDetails: FormGroup;
  addAddressDetails: FormGroup;
  addInsuranceDetails: FormGroup;
  addSymptomsForm:FormGroup;
  addCaseDetailsForm:FormGroup;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService:AlertService,public dialogRef: MatDialogRef<AddNewPatientOrdersComponent>, public fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public order: any) {
    this.addNewPatientsForm();
    this.addAddressForm();
    this.addInsuranceForm();
    this.createSymptomsForm();
    this.createCaseDetailsForm();
   }

  ngOnInit() {
  }

  get addFirstName() { return this.addBasicDetails.get('addFirstName'); }

  get addLastName() { return this.addBasicDetails.get('addLastName'); }

  get addSex() { return this.addBasicDetails.get('addSex'); }

  get addphone() { return this.addBasicDetails.get('addphone'); }

  get addEmail() { return this.addBasicDetails.get('addEmail'); }

  get addDob() { return this.addBasicDetails.get('addDob'); }

  get addReferringPhysician() { return this.addBasicDetails.get('addReferringPhysician'); }

  get addAttorney() { return this.addBasicDetails.get('addAttorney'); }

  get addReceivedDate() { return this.addBasicDetails.get('addReceivedDate'); }

  get addZip() { return this.addAddressDetails.get('addZip'); }

  get addState() { return this.addAddressDetails.get('addState'); }

  get addCity() { return this.addAddressDetails.get('addCity'); }

  get addAddress() { return this.addAddressDetails.get('addAddress'); }

  get addInsurance() { return this.addInsuranceDetails.get('addInsurance'); }

  get addInsuranceName() { return this.addInsuranceDetails.get('addInsuranceName'); }

  get addInsuredDob() { return this.addInsuranceDetails.get('addInsuredDob'); }

  get addInsuranceSex() { return this.addInsuranceDetails.get('addInsuranceSex'); }

  get addInsurancePhone() { return this.addInsuranceDetails.get('addInsurancePhone'); }

  get addInsuranceAddress() { return this.addInsuranceDetails.get('addInsuranceAddress'); }

  get addInsuredPerson() { return this.addInsuranceDetails.get('addInsuredPerson'); }

  get allergies() { return this.addSymptomsForm.get('allergies'); }

  get chronic() { return this.addSymptomsForm.get('chronic'); }

  get medication() { return this.addSymptomsForm.get('medication'); }

  get surgery() { return this.addSymptomsForm.get('surgery'); }

  get incidentDetail() { return this.addCaseDetailsForm.get('incidentDetail'); }

  get addIncidentDate() { return this.addCaseDetailsForm.get('addIncidentDate'); }

  get incidentRemarks() { return this.addCaseDetailsForm.get('incidentRemarks'); }

  addNewPatientsForm() {
    this.addBasicDetails = this.fb.group({
      addFirstName: new FormControl('',[Validators.required, Validators.maxLength(50), this.noWhiteSpaceValidator]),
      addLastName: new FormControl('',[Validators.required, Validators.maxLength(50), this.noWhiteSpaceValidator]),
      addSex: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      addphone: new FormControl('',[Validators.required, Validators.maxLength(50), this.noWhiteSpaceValidator]),
      addEmail: new FormControl('',[Validators.required, Validators.maxLength(50), this.noWhiteSpaceValidator]),
      addDob: new FormControl('',[Validators.maxLength(50)]),
      addReferringPhysician: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      addAttorney: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      addReceivedDate: new FormControl('',[Validators.maxLength(50)]),
    })
  }

  addAddressForm() {
    this.addAddressDetails = this.fb.group({
      addZip: new FormControl('',[Validators.required, Validators.maxLength(7), this.noWhiteSpaceValidator]),
      addState: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      addCity: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      addAddress: new FormControl('',[Validators.required, Validators.maxLength(300), this.noWhiteSpaceValidator]),
    })
  }

  addInsuranceForm() {
    this.addInsuranceDetails = this.fb.group({
      addInsurance: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      addInsuranceName: new FormControl('',[Validators.required,Validators.maxLength(50), this.noWhiteSpaceValidator]),
      addInsuredDob: new FormControl('',[Validators.maxLength(50)]),
      addInsuranceSex: new FormControl('',[Validators.required,Validators.maxLength(50)]),
      addInsurancePhone: new FormControl('',[Validators.required,Validators.maxLength(50), this.noWhiteSpaceValidator]),
      addInsuranceAddress: new FormControl('',[Validators.required,Validators.maxLength(300), this.noWhiteSpaceValidator]),
      addInsuredPerson: new FormControl(''),
    })
  }

  createSymptomsForm() {
    this.addSymptomsForm = this.fb.group({
      allergies: new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
      chronic: new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
      medication: new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
      surgery: new FormControl('',[Validators.required,Validators.maxLength(500),this.noWhiteSpaceValidator]),
    })
  }

  createCaseDetailsForm() {
    this.addCaseDetailsForm = this.fb.group({
      incidentDetail: new FormControl('',[Validators.required, Validators.maxLength(500), this.noWhiteSpaceValidator]),
      addIncidentDate: new FormControl('',[Validators.maxLength(50)]),
      incidentRemarks: new FormControl('',[Validators.required, Validators.maxLength(300), this.noWhiteSpaceValidator]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  
  saveOrder() {
    this.alertService.createAlert('Patient added successfully.', 1);
    this.dialogRef.close();
  }

}
