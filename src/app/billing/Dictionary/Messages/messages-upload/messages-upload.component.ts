import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-messages-upload',
  templateUrl: './messages-upload.component.html',
  styleUrls: ['./messages-upload.component.scss']
})
export class MessagesUploadComponent implements OnInit {

  constructor(public alertService: AlertService,
    public dialogRef: MatDialogRef<MessagesUploadComponent>) { }

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
