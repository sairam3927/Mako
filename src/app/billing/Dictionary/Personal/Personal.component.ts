import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DictionaryService } from '../dictionary.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

export interface Sample {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-Personal',
  templateUrl: './Personal.component.html',
  styleUrls: ['./Personal.component.scss']
})
export class PersonalComponent implements OnInit {

  gender: any;
  ethnicity: any;
  public PersonalForm: FormGroup;
  public gridObject: any = {};
  public formValue: any = {};
  public formData: any = {};
  selectedValueStepType: string = "2";
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  ethnicitys: Sample[] = [
    { value: '0', viewValue: 'Non-Hispanic White' },
    { value: '1', viewValue: 'Hispanic' },
    { value: '2', viewValue: 'African American' },
    { value: '3', viewValue: 'Asian' },
    { value: '4', viewValue: 'Others' }
  ];
  constructor(public alertService: AlertService, public dialogRef: MatDialogRef<PersonalComponent>, private dictionaryService: DictionaryService,
    public fb: FormBuilder) {
    this.PersonalForm = this.fb.group({
      Age: new FormControl('', [Validators.required]),
      Gender: new FormControl('', [Validators.required]),
      Pregnant: new FormControl('', [Validators.required]),
      Ethinicity: new FormControl('', [Validators.required]),
    })
  }
  ngOnInit() {
    this.getData();
  }

  getData() {

    this.dictionaryService.genderlist().subscribe(
      data => {
        console.log(data)
        this.gender = data['data'];
        // this.gender = [
        //   {
        //     "Value": 1,
        //     "Name": "Male"
        //   },
        //   {
        //     "Value": 2,
        //     "Name": "Female"
        //   }
        // ];
      }
    );
    this.dictionaryService.ethinicitylist().subscribe(
      data => {
        console.log(data)
        this.ethnicity = data['data'];
      //   this.ethnicity = [
      //     {
      //         "Value": 3,
      //         "Name": "Non-Hispanic White"
      //     },
      //     {
      //         "Value": 4,
      //         "Name": "Hispanic"
      //     },
      //     {
      //         "Value": 5,
      //         "Name": "African American"
      //     },
      //     {
      //         "Value": 6,
      //         "Name": "Asian"
      //     },
      //     {
      //         "Value": 7,
      //         "Name": "Others"
      //     }
      // ];
      }
    );

  }

  addSelections() {
    this.formValue = this.PersonalForm.value;
    console.log("values:", this.formValue);

    this.gridObject = {
      "Age": this.formValue['Age'],
      "Gender": this.formValue['Gender'],
      "Pregnant": this.formValue['Pregnant'],
      "Ethinicity": this.formValue['Ethinicity'],
    };
    console.log("Entered data", this.gridObject);
    this.close()

    this.dictionaryService.savepersonaldata(this.gridObject).subscribe(
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
