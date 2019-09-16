import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-add-icd-code',
  templateUrl: './add-icd-code.component.html',
  styleUrls: ['./add-icd-code.component.scss']
})
export class AddIcdCodeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddIcdCodeComponent>,@Inject(MAT_DIALOG_DATA) public icd: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveIcd() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }


}
