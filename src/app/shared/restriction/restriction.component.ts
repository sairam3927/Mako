import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-restriction',
  templateUrl: './restriction.component.html',
  styleUrls: ['./restriction.component.scss']
})
export class RestrictionComponent implements OnInit {
  
  action: any;

  constructor(public dialogRef: MatDialogRef<RestrictionComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }

}
