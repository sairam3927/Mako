import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-activity-log',
  templateUrl: './patient-activity-log.component.html',
  styleUrls: ['./patient-activity-log.component.scss']
})
export class PatientActivityLogComponent implements OnInit {

  tableList:any;
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
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  constructor() { }

  ngOnInit() {
    this.tableList = [
      {testName:"DME Follow UP 3" , patientVisit:"Internal Physician" , status:"Completed" , internalPhysician:"Stephen McGill" , dateTime: "Jul-10-2019 11:47 AM", apptDate:"-" , oldStatus:"Ineligible" , newStatus:"Scheduled" , statusNotes:"-" , document: "fabrice_oral_gluso_tolerance.pdf", orderId:"1269654", test:"Oral glucose-tolerance", docType:"Final Report", postedBy:"Candice" , updatedDate:"Jul 6 2019"},
      {testName:"Appointment" , patientVisit:"Front Desk" , status:"Cancelled" , internalPhysician:"Joe Deu-Ngoc" , dateTime: "Jul-03-2019 02:08 PM", apptDate:"Jul 29 2019 12:15PM" , oldStatus:"Scheduled" , newStatus:"Rescheduled" , statusNotes:"-" , document: "fabrice_mri_report.pdf", orderId:"1269654", test:"MRI Scan", docType:"Test Report", postedBy:"Candice" , updatedDate:"Jun 28 2019"},
      {testName:"CT Scan" , patientVisit:"Internal Physician" , status:"Updated" , internalPhysician:"Joe Deu-Ngoc" , dateTime: "Jul-01-2019 11:56 AM", apptDate:"-" , oldStatus:"NA" , newStatus:"Scheduled" , statusNotes:"-"  , document: "fabrice_xray.docx", orderId:"8757899", test:"X-Ray", docType:"Benefits", postedBy:"Nina Dobrev" , updatedDate:"May 24 2019"},
      {testName:"ECG" , patientVisit:"Front Desk" , status:"Updated" , internalPhysician:"Stephen McGill" , dateTime: "Jul-01-2019 11:56 AM", apptDate:"Jul 29 2019 2:35PM" , oldStatus:"Ineligible" , newStatus:"Approved" , statusNotes:"100% Cover"  , document: "fabrice_demo.pdf", orderId:"8757899", test:"CT Scan", docType:"Demo", postedBy:"Nina Dobrev" , updatedDate:"May 22 2019"},
      {testName:"Ultra Sound" , patientVisit:"Front Desk" , status:"Completed" , internalPhysician:"Joe Deu-Ngoc" , dateTime: "Jul-01-2019 11:56 AM", apptDate:"Jul 30 2019 1:25PM" , oldStatus:"NA" , newStatus:"Scheduled" , statusNotes:"-"  , document: "fabrice_final_report.pdf", orderId:"1269654", test:"ECG", docType:"Final Report", postedBy:"Candice" , updatedDate:"Apr 01 2019"}
    ]
  }

}
