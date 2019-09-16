import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-visit-status',
  templateUrl: './add-visit-status.component.html',
  styleUrls: ['./add-visit-status.component.scss']
})
export class AddVisitStatusComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddVisitStatusComponent>,@Inject(MAT_DIALOG_DATA) public addvisit: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveVisit() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
