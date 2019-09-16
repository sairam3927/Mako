import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-scheduled-appointments',
  templateUrl: './patient-scheduled-appointments.component.html',
  styleUrls: ['./patient-scheduled-appointments.component.scss']
})
export class PatientScheduledAppointmentsComponent implements OnInit {

  tableList:any;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  constructor() { }

  ngOnInit() {
    this.tableList = [
      {testName:"DME Follow UP 3" , dateTime: "Jul-10-2019 11:47 AM", apptDate:"-" , oldStatus:"Ineligible" , newStatus:"Scheduled" , statusNotes:"-" , document: "fabrice_oral_gluso_tolerance.pdf", orderId:"1269654", test:"Oral glucose-tolerance", docType:"Final Report", postedBy:"Candice" , updatedDate:"Mar 12 2019" , insStatus:"Approved" , schStatus:"Final Report"},
      {testName:"Appointment" , dateTime: "Jul-03-2019 02:08 PM", apptDate:"Jul 29 2019 12:15PM" , oldStatus:"Scheduled" , newStatus:"Rescheduled" , statusNotes:"-" , document: "fabrice_mri_report.pdf", orderId:"1269654", test:"MRI Scan", docType:"Test Report", postedBy:"Candice" , updatedDate:"Jun 28 2019" , insStatus:"Approved" , schStatus:"Rescheduled"},
      {testName:"CT Scan" , dateTime: "Jul-01-2019 11:56 AM", apptDate:"-" , oldStatus:"NA" , newStatus:"Scheduled" , statusNotes:"-"  , document: "fabrice_xray.docx", orderId:"8757899", test:"X-Ray", docType:"Benefits", postedBy:"Nina Dobrev" , updatedDate:"Jun 29 2019" , insStatus:"Approved" , schStatus:"Scheduled"},
      {testName:"ECG" , dateTime: "Jul-01-2019 11:56 AM", apptDate:"-" , oldStatus:"Ineligible" , newStatus:"Approved" , statusNotes:"100% Cover"  , document: "fabrice_demo.pdf", orderId:"8757899", test:"CT Scan", docType:"Demo", postedBy:"Nina Dobrev" , updatedDate:"Jun 29 2019" , insStatus:"Approved" , schStatus:"Final Report"},
      {testName:"Ultra Sound" , dateTime: "Jul-01-2019 11:56 AM", apptDate:"-" , oldStatus:"NA" , newStatus:"Scheduled" , statusNotes:"-"  , document: "fabrice_final_report.pdf", orderId:"1269654", test:"ECG", docType:"Final Report", postedBy:"Candice" , updatedDate:"Jul 03 2019" , insStatus:"Approved" , schStatus:"Final Report"}
    ]
  }

}
