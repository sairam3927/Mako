import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../../shared/services/alert.service';

@Component({
  selector: 'app-schedule-a-visit',
  templateUrl: './schedule-a-visit.component.html',
  styleUrls: ['./schedule-a-visit.component.scss']
})
export class ScheduleAVisitComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService:AlertService,public dialogRef: MatDialogRef<ScheduleAVisitComponent>,@Inject(MAT_DIALOG_DATA) public order: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveVisit() {
    this.alertService.createAlert('Appointment scheduled successfully.', 1);
    this.dialogRef.close();
  }

}
