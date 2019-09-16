import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-claim-status',
  templateUrl: './add-claim-status.component.html',
  styleUrls: ['./add-claim-status.component.scss']
})
export class AddClaimStatusComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddClaimStatusComponent>,@Inject(MAT_DIALOG_DATA) public addclaim: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveClaim() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }


}
