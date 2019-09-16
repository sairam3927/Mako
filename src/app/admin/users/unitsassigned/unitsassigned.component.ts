import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-unitsassigned',
  templateUrl: './unitsassigned.component.html',
  styleUrls: ['./unitsassigned.component.scss']
})
export class UnitsassignedComponent implements OnInit {

  myLabel:boolean = true;

  constructor(public dialogRef: MatDialogRef<UnitsassignedComponent>,@Inject(MAT_DIALOG_DATA) public unit: any,) { }

  close(): void {
    this.dialogRef.close();
  }

  saveUnits() {
   // this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
