import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-unscheduled-visit',
  templateUrl: './add-unscheduled-visit.component.html',
  styleUrls: ['./add-unscheduled-visit.component.scss']
})
export class AddUnscheduledVisitComponent implements OnInit {
  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService:AlertService,public dialogRef: MatDialogRef<AddUnscheduledVisitComponent>,@Inject(MAT_DIALOG_DATA) public order: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveVisit() {
    this.alertService.createAlert('Appointment scheduled successfully', 1);
    this.dialogRef.close();
  }


}
