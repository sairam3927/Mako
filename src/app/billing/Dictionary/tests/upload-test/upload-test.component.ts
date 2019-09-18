import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload-test',
  templateUrl: './upload-test.component.html',
  styleUrls: ['./upload-test.component.scss']
})
export class UploadTestComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UploadTestComponent>,
    public fb: FormBuilder,
  ) { }
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
