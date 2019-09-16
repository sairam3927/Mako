import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-i-physician',
  templateUrl: './add-i-physician.component.html',
  styleUrls: ['./add-i-physician.component.scss']
})
export class AddIPhysicianComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddIPhysicianComponent>,@Inject(MAT_DIALOG_DATA) public physician: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  savePhysician() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }


}
