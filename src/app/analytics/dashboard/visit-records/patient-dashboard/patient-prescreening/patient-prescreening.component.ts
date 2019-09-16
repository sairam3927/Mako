import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-prescreening',
  templateUrl: './patient-prescreening.component.html',
  styleUrls: ['./patient-prescreening.component.scss']
})
export class PatientPrescreeningComponent implements OnInit {
  tableList:any;
  constructor() { }

  ngOnInit() {
    this.tableList = [
      {sNo:1 , description:"Are you currently taking aspirin (or any medicines that contain aspirin) or any blood thinners?"},
      {sNo:2 , description:"Are you pregnant or possibly pregnant?"},
      {sNo:3 , description:"Do you have high blood pressure?"},
      {sNo:4 , description:"Do you have any heart problems?"},
      {sNo:5 , description:"Do you have ulcers or gastritis?"},
      {sNo:6 , description:"Do you have diabetes?"},
      {sNo:7 , description:"Do you have any liver problems/Hepatitis?"},
      {sNo:8 , description:"Do you have any kidney diseases?"},
      {sNo:9 , description:"Do you have cancer?"},
      {sNo:10 , description:"Do you smoke or chew tobacco?"},
      {sNo:11 , description:"Do you have HIV or Hepatitis C?"},
      {sNo:12 , description:"Do you have any blood clots or embolus?"}
    ]
  }

}
