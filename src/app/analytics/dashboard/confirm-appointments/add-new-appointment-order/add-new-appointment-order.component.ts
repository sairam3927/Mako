import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-add-new-appointment-order',
  templateUrl: './add-new-appointment-order.component.html',
  styleUrls: ['./add-new-appointment-order.component.scss']
})
export class AddNewAppointmentOrderComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  //public form:FormGroup;
  currDate = new Date();
  addAppointmentOrder: FormGroup;
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService:AlertService,public dialogRef: MatDialogRef<AddNewAppointmentOrderComponent>, public fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public order: any) {
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
