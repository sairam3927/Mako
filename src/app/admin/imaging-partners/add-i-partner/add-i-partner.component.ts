import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-i-partner',
  templateUrl: './add-i-partner.component.html',
  styleUrls: ['./add-i-partner.component.scss']
})
export class AddIPartnerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddIPartnerComponent>,@Inject(MAT_DIALOG_DATA) public partner: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  savePartner() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }


}
