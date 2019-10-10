import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DictionaryService } from '../../dictionary.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {

  id: any;
  action: any;
  item: any;
  public addSectionForm: FormGroup;
  public gridObject: any = {};
  public formValue: any = {};
  public formData: any = {};
  constructor(public alertService: AlertService, private _fb: FormBuilder, public dialogRef: MatDialogRef<AddSectionComponent>, private dictionaryService: DictionaryService,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.addSectionForm = this.fb.group({
      SectionName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      SectionDescription: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
    })

    if (this.action == 'Update') {

      this.addSectionForm = this.fb.group({
        SectionName: new FormControl(this.item.SectionName, [Validators.required, this.noWhiteSpaceValidator]),
        SectionDescription: new FormControl(this.item.SectionDescription, [Validators.required, this.noWhiteSpaceValidator]),
      })
      console.log('form Data', this.formData);
    }
    console.log("Section ID", this.id);
    console.log("this is child action", this.action);

  }

  addSelections() {
    this.formValue = this.addSectionForm.value;
    console.log("values:", this.formValue);

    this.gridObject = {
      "SectionsId": this.id,
      "SectionName": this.formValue['SectionName'],
      "SectionDescription": this.formValue['SectionDescription'],
    };
    console.log("Entered data", this.gridObject);
    this.close()

    this.dictionaryService.Sectionsedit(this.gridObject).subscribe(
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
