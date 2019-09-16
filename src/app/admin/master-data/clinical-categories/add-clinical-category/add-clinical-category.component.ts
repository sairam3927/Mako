import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-clinical-category',
  templateUrl: './add-clinical-category.component.html',
  styleUrls: ['./add-clinical-category.component.scss']
})
export class AddClinicalCategoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddClinicalCategoryComponent>,@Inject(MAT_DIALOG_DATA) public business: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  saveBusiness() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
