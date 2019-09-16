import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-appointment-order',
  templateUrl: './add-appointment-order.component.html',
  styleUrls: ['./add-appointment-order.component.scss']
})
export class AddAppointmentOrderComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  addAppointmentOrder: FormGroup;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService:AlertService,public dialogRef: MatDialogRef<AddAppointmentOrderComponent>, public fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public order: any) {
    this.addAppointForm();
   }

  ngOnInit() {
  }

  get patientName() { return this.addAppointmentOrder.get('patientName'); }

  get addAppointmentDate() { return this.addAppointmentOrder.get('addAppointmentDate'); }

  addAppointForm() {
    this.addAppointmentOrder = this.fb.group({
      patientName: new FormControl('',[Validators.required,Validators.maxLength(100)]),
      addAppointmentDate: new FormControl('',[Validators.maxLength(20)])
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveOrder() {
    this.alertService.createAlert('Appointment Scheduled successfully.', 1);
    this.dialogRef.close();
  }

}
