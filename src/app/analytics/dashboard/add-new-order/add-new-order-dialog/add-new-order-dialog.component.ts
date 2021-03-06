import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-new-order-dialog',
  templateUrl: './add-new-order-dialog.component.html',
  styleUrls: ['./add-new-order-dialog.component.scss']
})
export class AddNewOrderDialogComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public dialogRef: MatDialogRef<AddNewOrderDialogComponent>,@Inject(MAT_DIALOG_DATA) public order: any) { }

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
