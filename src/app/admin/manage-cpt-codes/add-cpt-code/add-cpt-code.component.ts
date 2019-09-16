import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-cpt-code',
  templateUrl: './add-cpt-code.component.html',
  styleUrls: ['./add-cpt-code.component.scss']
})
export class AddCptCodeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCptCodeComponent>,@Inject(MAT_DIALOG_DATA) public cpt: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveCpt() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }


}
