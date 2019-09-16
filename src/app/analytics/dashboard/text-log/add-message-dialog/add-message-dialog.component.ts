import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-message-dialog',
  templateUrl: './add-message-dialog.component.html',
  styleUrls: ['./add-message-dialog.component.scss']
})
export class AddMessageDialogComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  //public form:FormGroup;
  currDate = new Date();
  addText: FormGroup;
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService : AlertService,public dialogRef: MatDialogRef<AddMessageDialogComponent>,public fb : FormBuilder,@Inject(MAT_DIALOG_DATA) public order: any) {
    this.addTextForm();
   }

  ngOnInit() {
  }

  get patientName() { return this.addText.get('patientName'); }

  get diagnosisName() { return this.addText.get('diagnosisName'); }

  get textMessage() { return this.addText.get('textMessage'); }

  addTextForm() {
    this.addText = this.fb.group({
      patientName: new FormControl('',[Validators.required, Validators.maxLength(100)]),
      diagnosisName: new FormControl('',[Validators.required, Validators.maxLength(100)]),
      textMessage: new FormControl('',[Validators.required, Validators.maxLength(100), this.noWhiteSpaceValidator]),
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
    this.alertService.createAlert("Message sent successfully",1)
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
