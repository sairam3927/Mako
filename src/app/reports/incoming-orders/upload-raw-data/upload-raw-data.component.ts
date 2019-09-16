import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-upload-raw-data',
  templateUrl: './upload-raw-data.component.html',
  styleUrls: ['./upload-raw-data.component.scss']
})
export class UploadRawDataComponent implements OnInit {

  constructor(public alertService: AlertService,
    public dialogRef: MatDialogRef<UploadRawDataComponent>) { }

  ngOnInit() {
  }

  saveOrder() {
    this.alertService.createAlert('Uploaded Successfully', 1);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }

}
