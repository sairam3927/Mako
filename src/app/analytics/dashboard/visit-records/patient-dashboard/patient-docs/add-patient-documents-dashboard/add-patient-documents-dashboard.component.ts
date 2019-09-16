import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-add-patient-documents-dashboard',
  templateUrl: './add-patient-documents-dashboard.component.html',
  styleUrls: ['./add-patient-documents-dashboard.component.scss']
})
export class AddPatientDocumentsDashboardComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  //public form:FormGroup;
  currDate = new Date();
  selected = 7;
  select=0;
  chosenItem=1;
  dates = new Date(new Date().setHours(0,0,0,0));
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public dialogRef: MatDialogRef<AddPatientDocumentsDashboardComponent>,@Inject(MAT_DIALOG_DATA) public order: any) { }

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
