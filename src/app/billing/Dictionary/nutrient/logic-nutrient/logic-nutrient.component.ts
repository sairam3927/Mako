import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DictionaryService } from '../../dictionary.service';

@Component({
  selector: 'app-logic-nutrient',
  templateUrl: './logic-nutrient.component.html',
  styleUrls: ['./logic-nutrient.component.scss']
})
export class LogicNutrientComponent implements OnInit {

  id: any;
  action: any;
  item: any;
  public addNutrientForm: FormGroup;
  public gridObject: any = {};
  public formValue: any = {};
  public formData: any = {};
  constructor(public alertService: AlertService, private _fb: FormBuilder,
    public dialogRef: MatDialogRef<LogicNutrientComponent>, private dictionaryService: DictionaryService,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.addNutrientForm = this.fb.group({
      SectionName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      NutrientCondition: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
    })

    if (this.action == 'Update') {

      this.addNutrientForm = this.fb.group({
        SectionName: new FormControl(this.item.Section, [Validators.required, this.noWhiteSpaceValidator]),
        NutrientCondition: new FormControl(this.item.Nutrient_Condition, [Validators.required, this.noWhiteSpaceValidator]),
      })
      console.log('form Data', this.formData);
    }
    console.log("Nutrient_Condition ID", this.id);
    console.log("this is child action", this.action);

  }

  addNutrient() {
    this.formValue = this.addNutrientForm.value;
    console.log("values:", this.formValue);

    this.gridObject = {
      "Nutrients_ConditionsId": this.id,
      "Section": this.formValue['SectionName'],
      "Nutrient_Condition": this.formValue['NutrientCondition'],
    };
    console.log("Entered data", this.gridObject);
    this.close()

    this.dictionaryService.editnutrients_conditions(this.gridObject).subscribe(
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
