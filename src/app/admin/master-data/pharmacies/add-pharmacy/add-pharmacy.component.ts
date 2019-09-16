import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-pharmacy',
  templateUrl: './add-pharmacy.component.html',
  styleUrls: ['./add-pharmacy.component.scss']
})
export class AddPharmacyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddPharmacyComponent>,@Inject(MAT_DIALOG_DATA) public pharmacy: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  savePharmacy() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
