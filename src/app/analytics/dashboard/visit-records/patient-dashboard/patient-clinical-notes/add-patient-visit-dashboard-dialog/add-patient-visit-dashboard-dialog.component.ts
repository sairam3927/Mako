import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-patient-visit-dashboard-dialog',
  templateUrl: './add-patient-visit-dashboard-dialog.component.html',
  styleUrls: ['./add-patient-visit-dashboard-dialog.component.scss']
})
export class AddPatientVisitDashboardDialogComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public dialogRef: MatDialogRef<AddPatientVisitDashboardDialogComponent>,@Inject(MAT_DIALOG_DATA) public order: any) {
    
   }

  ngOnInit() {
  }

  
 

  close(): void {
    this.dialogRef.close();
  }

  saveOrder() {
    this.dialogRef.close();
  }
}
