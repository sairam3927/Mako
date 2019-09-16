import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dri-upload-csv',
  templateUrl: './dri-upload-csv.component.html',
  styleUrls: ['./dri-upload-csv.component.scss']
})
export class DriUploadCSVComponent implements OnInit {

  constructor(
              public dialogRef: MatDialogRef<DriUploadCSVComponent>,
              public fb : FormBuilder,
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