import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload-csv-haplotype',
  templateUrl: './upload-csv-haplotype.component.html',
  styleUrls: ['./upload-csv-haplotype.component.scss']
})
export class UploadCsvHaplotypeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UploadCsvHaplotypeComponent>,
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
