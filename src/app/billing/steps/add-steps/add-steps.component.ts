import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-steps',
  templateUrl: './add-steps.component.html',
  styleUrls: ['./add-steps.component.scss']
})
export class AddStepsComponent implements OnInit {

  selectedValueStepType:string = "1";
  constructor(public dialogRef: MatDialogRef<AddStepsComponent>) { }

  ngOnInit() {
  }

  saveOrder() {
    // this.alertService.createAlert('PatientData added successfully.', 1);
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }

}
