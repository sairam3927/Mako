import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-logic-reportvariable',
  templateUrl: './logic-reportvariable.component.html',
  styleUrls: ['./logic-reportvariable.component.scss']
})
export class LogicReportvariableComponent implements OnInit {
  Document: any;
  public dateTime1: Date;
  public dateTime2: Date;
  incomingOrderForm: FormGroup;
  gender=["Male","Female","Others"];
  //public form:FormGroup;
  selectedValueStepType:string = "0";
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService : AlertService,public dialogRef: MatDialogRef<LogicReportvariableComponent>,public fb : FormBuilder,@Inject(MAT_DIALOG_DATA) public order: any) { 
  }

  ngOnInit() {
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
