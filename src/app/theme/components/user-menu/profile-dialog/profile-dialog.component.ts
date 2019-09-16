import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss'],
  providers: [AlertService]
})
export class ProfileDialogComponent implements OnInit {
  public dateTime1: Date;

  constructor(public dialogRef: MatDialogRef<ProfileDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number,  private alertService: AlertService) {  }

  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  saveProfile() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
