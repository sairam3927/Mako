import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-patient-docs-in-manage-visits',
  templateUrl: './patient-docs-in-manage-visits.component.html',
  styleUrls: ['./patient-docs-in-manage-visits.component.scss']
})
export class PatientDocsInManageVisitsComponent implements OnInit {
  tableList:any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialogRef: MatDialogRef<PatientDocsInManageVisitsComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) { }

  ngOnInit() {
    this.tableList = [
      {docuName:"fabrice_oral_gluso_tolerance.pdf" , docuType:"Oral glucose"},
      {docuName:"fabrice_mri_report.pdf" , docuType:"MRI report"},
      {docuName:"fabrice_xray.docx" , docuType:"Xray"}
    ]
  }

  close(): void {
    this.dialogRef.close();
  }

  closeDocument() {
    //this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  saveAttorney() {
    
  }

  deleteVisit(){
    //this.alertService.createAlert('Successfully deleted.', 1);
    }


}
