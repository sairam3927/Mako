import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AlertService} from '../../../../shared/services/alert.service';
@Component({
  selector: 'app-assign-physician',
  templateUrl: './assign-physician.component.html',
  styleUrls: ['./assign-physician.component.scss']
})
export class AssignPhysicianComponent implements OnInit {

  public dateTime1: Date;
  public dateTime2: Date;
  public dateTime3: Date;
  assignPhysician: FormGroup;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public alertService: AlertService,public dialogRef: MatDialogRef<AssignPhysicianComponent>, public fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public order: any) { 
    this.assignPhysicianForm();
  }

  get patientName() { return this.assignPhysician.get('patientName'); }

  get doctorName() { return this.assignPhysician.get('doctorName'); }

  ngOnInit() {
  }

  assignPhysicianForm() {
    this.assignPhysician = this.fb.group({
      patientName: new FormControl('',[Validators.required,Validators.maxLength(100)]),
      doctorName: new FormControl('',[Validators.required,Validators.maxLength(20)])
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveOrder() {
    this.alertService.createAlert("Physician assigned successfully",1)
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
