import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-attorney',
  templateUrl: './add-attorney.component.html',
  styleUrls: ['./add-attorney.component.scss']
})
export class AddAttorneyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAttorneyComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAttorney() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
