import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(public alertService: AlertService,
    public dialogRef: MatDialogRef<UploadComponent>) { }

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
