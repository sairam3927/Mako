import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-reports',
  templateUrl: './patient-reports.component.html',
  styleUrls: ['./patient-reports.component.scss']
})
export class PatientReportsComponent implements OnInit {
  reportList: any;

  constructor() { }

  ngOnInit() {
    this.reportList = [
      { id: 1, DocumentTitle: "Detailed Report", UploadDate: "09/06/2019, 5:00 PM", Samples: "243", TotalRecords: "1,00,453", Duplicates: "2300", OutofScope: "52,000", Incomplete: "6", Processed: "120 / 243", Download: "", Status: "Pending" },
      { id: 1, DocumentTitle: "Summary Report", UploadDate: "09/17/2019, 10:46 AM", Samples: "252", TotalRecords: "1,01,756", Duplicates: "2400", OutofScope: "60,000", Incomplete: "8", Processed: "150 / 252", Download: "", Status: "Pending" }
      
    ];
  }

}
