import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-new-patient-visit',
  templateUrl: './add-new-patient-visit.component.html',
  styleUrls: ['./add-new-patient-visit.component.scss']
})
export class AddNewPatientVisitComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public dialogRef: MatDialogRef<AddNewPatientVisitComponent>,@Inject(MAT_DIALOG_DATA) public order: any) {
    
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
