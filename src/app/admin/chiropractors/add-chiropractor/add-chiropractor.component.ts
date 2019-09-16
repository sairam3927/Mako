import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-chiropractor',
  templateUrl: './add-chiropractor.component.html',
  styleUrls: ['./add-chiropractor.component.scss']
})
export class AddChiropractorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddChiropractorComponent>,@Inject(MAT_DIALOG_DATA) public physician: any) { }

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
