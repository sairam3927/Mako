import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddSectionComponent } from '../../sections/add-section/add-section.component';
import { DictionaryService } from '../../dictionary.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss']
})
export class AddTestComponent implements OnInit {

  id: any;
  action: any;
  item: any;
  public addTestForm: FormGroup;
  public gridObject: any = {};
  public formValue: any = {};
  public formData: any = {};
  constructor(public alertService: AlertService, private _fb: FormBuilder, public dialogRef: MatDialogRef<AddSectionComponent>, private dictionaryService: DictionaryService,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.addTestForm = this.fb.group({
      TestName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      NutrientCondition: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Para1: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Para2: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      RecommendedValue1: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      RecommendedValue2: new FormControl('', [Validators.required, this.noWhiteSpaceValidator])
    })

    if (this.action == 'Update') {

      this.addTestForm = this.fb.group({
        TestName: new FormControl(this.item.TestName, [Validators.required, this.noWhiteSpaceValidator]),
        NutrientCondition: new FormControl(this.item.Nutrient_Condition, [Validators.required, this.noWhiteSpaceValidator]),
        Para1: new FormControl(this.item.Para1, [Validators.required, this.noWhiteSpaceValidator]),
        Para2: new FormControl(this.item.Para2, [Validators.required, this.noWhiteSpaceValidator]),
        RecommendedValue1: new FormControl(this.item.RecommendedValue1, [Validators.required, this.noWhiteSpaceValidator]),
        RecommendedValue2: new FormControl(this.item.RecommendedValue2, [Validators.required, this.noWhiteSpaceValidator])
      })
      console.log('form Data', this.formData);
    }
    console.log("Test ID", this.id);
    console.log("this is child action", this.action);

  }

  addTest() {
    this.formValue = this.addTestForm.value;
    console.log("values:", this.formValue);

    this.gridObject = {
      "TestsId": this.id,
      "TestName": this.formValue['TestName'],
      "Nutrient_Condition": this.formValue['NutrientCondition'],
      "Para1": this.formValue['Para1'],
      "Para2": this.formValue['Para2'],
      "RecommendedValue1": this.formValue['RecommendedValue1'],
      "RecommendedValue2": this.formValue['RecommendedValue2']
    };
    console.log("Entered data", this.gridObject);
    this.close()

    this.dictionaryService.edittests(this.gridObject).subscribe(
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

  close(): void {
    this.dialogRef.close();
  }
  noWhiteSpaceValidator(control: FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid = !isWhiteSpace;
    return isValid ? null : { 'whitespace': true };
  }

}
