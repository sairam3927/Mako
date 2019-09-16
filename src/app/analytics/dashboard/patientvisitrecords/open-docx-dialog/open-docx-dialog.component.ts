import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-open-docx-dialog',
  templateUrl: './open-docx-dialog.component.html',
  styleUrls: ['./open-docx-dialog.component.scss']
})
export class OpenDocxDialogComponent implements OnInit {

  public dateTime1: Date;
  tableList:any;
  public dateTime2: Date;
  //public form:FormGroup;
  currDate = new Date();
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());

  constructor(public dialogRef: MatDialogRef<OpenDocxDialogComponent>,@Inject(MAT_DIALOG_DATA) public order: any) {
    
   }

  ngOnInit() {
  }

  
 

  close(): void {
    this.dialogRef.close();
  }

  saveOrder() {
    this.dialogRef.close();
  }

}
