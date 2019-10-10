import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  check : any;
  constructor(public alertService: AlertService,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
  }

  saveOrder() {
    let saved = !this.check
    this.dialogRef.close(saved);
  }

  close(): void {
    this.dialogRef.close();
  }


}

