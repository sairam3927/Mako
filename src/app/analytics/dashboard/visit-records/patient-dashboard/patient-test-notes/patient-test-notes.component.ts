import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-test-notes',
  templateUrl: './patient-test-notes.component.html',
  styleUrls: ['./patient-test-notes.component.scss']
})
export class PatientTestNotesComponent implements OnInit {
  tables:any;
  constructor() { }

  ngOnInit() {
    this.tables = [
      {testName:"CT Scan" , description:"CT scan report is normal" , postedBy:"Ford, Passion" , postedDate:"May 31 2019 12:13 PM" },
      {testName:"MRI Scan" , description:"Bone looks disturbed in MRI scan" , postedBy:"Ford, Passion" , postedDate:"May 31 2019 12:13 PM" },
      {testName:"Ultra Sound" , description:"Bone moved to the right as per the ultra sound report" , postedBy:"Ford, Passion" , postedDate:"May 01 2019 05:11 PM" },
      {testName:"ECG" , description:"ECG report is fine" , postedBy:"Ford, Passion" , postedDate:"May 01 2019 05:11 PM" },
      {testName:"DME Followup" , description:"Patient compliant, uploaded sleep report" , postedBy:"Ford, Passion" , postedDate:"May 01 2019 05:03 PM" },
      {testName:"X-Ray" , description:"X-Ray of the bone looks fine and normal" , postedBy:"Ford, Passion" , postedDate:"May 01 2019 03:11 PM" },
    ]
  }

}
