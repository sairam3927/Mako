import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-business-center',
  templateUrl: './add-business-center.component.html',
  styleUrls: ['./add-business-center.component.scss']
})
export class AddBusinessCenterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddBusinessCenterComponent>,@Inject(MAT_DIALOG_DATA) public business: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveBusiness() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }


}
