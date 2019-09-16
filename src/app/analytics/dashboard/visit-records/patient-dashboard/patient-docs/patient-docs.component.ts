import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../app.settings';
import { Settings } from '../../../../../app.settings.model';
import { AddPatientDocumentsDashboardComponent } from './add-patient-documents-dashboard/add-patient-documents-dashboard.component';

@Component({
  selector: 'app-patient-docs',
  templateUrl: './patient-docs.component.html',
  styleUrls: ['./patient-docs.component.scss']
})
export class PatientDocsComponent implements OnInit {
  tableList:any;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public settings: Settings;
  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  public dateTime2: Date;
  public dateTime3: Date;
  referringOptions = ["Stephen McGill","Otto Rieder","Joe Deu-Ngoc","Chris Soles","Brad Kewalramani","Michael Persaud","Habib Kharsa"];
  stepsOptionSelected: any;
  onStepsOptionsSelected(event){
   console.log(event); 
  }
  statusOptions = ["Active","Inactive"];
  
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) {
      this.settings = this.appSettings.settings;
    }

  ngOnInit() {
    this.tableList = [
      {date: "Jul-10-2019 11:47 AM", document: "fabrice_oral_gluso_tolerance.pdf", orderId:"1269654", test:"Oral glucose-tolerance", docType:"Final Report", postedBy:"Candice"},
      {date: "Jul-03-2019 02:08 PM", document: "fabrice_mri_report.pdf", orderId:"1269654", test:"MRI Scan", docType:"Test Report", postedBy:"Candice"},
      {date: "Jul-01-2019 11:56 AM", document: "fabrice_xray.docx", orderId:"8757899", test:"X-Ray", docType:"Benefits", postedBy:"Nina Dobrev"},
      {date: "Jul-01-2019 11:56 AM", document: "fabrice_demo.pdf", orderId:"8757899", test:"CT Scan", docType:"Demo", postedBy:"Nina Dobrev"},
      {date: "Jul-01-2019 11:56 AM", document: "fabrice_final_report.pdf", orderId:"1269654", test:"ECG", docType:"Final Report", postedBy:"Candice"}
    ]
  }

  public openDocxDialog(id) {
    let dialogRef = this.dialog.open(AddPatientDocumentsDashboardComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
  

  

}
