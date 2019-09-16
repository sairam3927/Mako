import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-patient-notes-in-manage-visits',
  templateUrl: './patient-notes-in-manage-visits.component.html',
  styleUrls: ['./patient-notes-in-manage-visits.component.scss']
})
export class PatientNotesInManageVisitsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PatientNotesInManageVisitsComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) { }

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
