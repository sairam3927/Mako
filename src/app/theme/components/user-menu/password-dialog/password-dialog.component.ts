import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss'],
  providers: [AlertService]
})
export class PasswordDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PasswordDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) {  }

  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  updatePassword() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
