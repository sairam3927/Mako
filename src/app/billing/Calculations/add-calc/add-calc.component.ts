import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-calc',
  templateUrl: './add-calc.component.html',
  styleUrls: ['./add-calc.component.scss']
})
export class AddCalcComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCalcComponent>) { }

  ngOnInit() {
  }

  saveOrder() {
    // this.alertService.createAlert('PatientData added successfully.', 1);
    this.dialogRef.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
