import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-profile-and-insurance-dialog',
  templateUrl: './profile-and-insurance-dialog.component.html',
  styleUrls: ['./profile-and-insurance-dialog.component.scss']
})
export class ProfileAndInsuranceDialogComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService:AlertService,public dialogRef: MatDialogRef<ProfileAndInsuranceDialogComponent>,@Inject(MAT_DIALOG_DATA) public order: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveOrder() {
    this.alertService.createAlert('Order Converted Successfully', 1);
    this.dialogRef.close();
  }
}
