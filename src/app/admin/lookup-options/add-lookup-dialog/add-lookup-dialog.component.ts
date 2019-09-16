import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-lookup-dialog',
  templateUrl: './add-lookup-dialog.component.html',
  styleUrls: ['./add-lookup-dialog.component.scss']
})
export class AddLookupDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddLookupDialogComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) { }

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
