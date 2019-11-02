import { Component, OnInit } from '@angular/core';
import { PatientDashboardService } from '../patient-dashboard.service';

@Component({
  selector: 'app-patient-documents',
  templateUrl: './patient-documents.component.html',
  styleUrls: ['./patient-documents.component.scss']
})
export class PatientDocumentsComponent implements OnInit {

  DocumentList: any;

  constructor(public patientDashboardService: PatientDashboardService) { }

  ngOnInit() {
    this.getPatientData();
  }

  getPatientData() {
    let body = {
      "OrderId" : null
    }
    console.log("body", body)
    this.patientDashboardService.getdocs_datalist(body).subscribe(
      data => {
        console.log(data)
        this.DocumentList = data["DocDataList"];
      }
    );
  }

}
