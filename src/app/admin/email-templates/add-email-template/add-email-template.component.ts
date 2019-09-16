import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-email-template',
  templateUrl: './add-email-template.component.html',
  styleUrls: ['./add-email-template.component.scss']
})
export class AddEmailTemplateComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public dialogRef: MatDialogRef<AddEmailTemplateComponent>,@Inject(MAT_DIALOG_DATA) public order: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveOrder() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
