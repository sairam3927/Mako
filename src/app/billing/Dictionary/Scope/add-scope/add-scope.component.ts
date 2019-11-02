import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddSectionComponent } from '../../sections/add-section/add-section.component';
import { DictionaryService } from '../../dictionary.service';

@Component({
  selector: 'app-add-scope',
  templateUrl: './add-scope.component.html',
  styleUrls: ['./add-scope.component.scss']
})
export class AddScopeComponent implements OnInit {

  id: any;
  action: any;
  item: any;
  public addScopeForm: FormGroup;
  public gridObject: any = {};
  public formValue: any = {};
  public formData: any = {};
  constructor(public alertService: AlertService, private _fb: FormBuilder, public dialogRef: MatDialogRef<AddSectionComponent>, private dictionaryService: DictionaryService,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.addScopeForm = this.fb.group({
      AlleleName: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Gene: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
      Description: new FormControl('', [Validators.required, this.noWhiteSpaceValidator]),
    })

    if (this.action == 'Update') {

      this.addScopeForm = this.fb.group({
        AlleleName: new FormControl(this.item.AlleleName, [Validators.required, this.noWhiteSpaceValidator]),
        Gene: new FormControl(this.item.Gene, [Validators.required, this.noWhiteSpaceValidator]),
        Description: new FormControl(this.item.Description, [Validators.required, this.noWhiteSpaceValidator]),
      })
      console.log('form Data', this.formData);
    }
    console.log("Section ID", this.id);
    console.log("this is child action", this.action);

  }

  addScope() {
    this.formValue = this.addScopeForm.value;
    console.log("values:", this.formValue);

    if (this.addScopeForm.valid) {
      this.gridObject = {
        "ScopeId": this.id,
        "AlleleName": this.formValue['AlleleName'],
        "Gene": this.formValue['Gene'],
        "Description": this.formValue['Description'],
      };
      console.log("Entered data", this.gridObject);
      this.close()

      this.dictionaryService.editscope(this.gridObject).subscribe(
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
    } else {
      this.alertService.createAlert('Description is mandatory', 0);
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
}
