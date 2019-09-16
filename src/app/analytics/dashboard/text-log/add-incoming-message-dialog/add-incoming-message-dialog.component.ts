import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-incoming-message-dialog',
  templateUrl: './add-incoming-message-dialog.component.html',
  styleUrls: ['./add-incoming-message-dialog.component.scss']
})
export class AddIncomingMessageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddIncomingMessageDialogComponent>,@Inject(MAT_DIALOG_DATA) public order: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveOrder() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
