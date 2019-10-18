import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})

export class PatientDashboardComponent implements OnInit {

  public settings: Settings;
  public filterToggle : boolean;
  constructor(public appSettings:AppSettings){
    this.settings = this.appSettings.settings; 
    
  }
  imagePath = '../../../../assets/img/mako_logo.png';
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  ngOnInit() {
    this.filterToggle = false;
  }
  
// myform: FormGroup;
projectOptions = ["Port Area Initiative", "Basement Flooding", "Dome Scanning", "Culvert Topographic", "Bridge Topographic","Town House Foundation"];
projectOptionSelected: any;
onprojectptionsSelected(event) {
  console.log(event); //option value will be sent as event
}
siteOptions = ["MISS201905123", "MISS202684235", "MISS202612598", "MISS202758926"];
siteOptionSelected: any;
onsiteOptionsSelected(event) {
  console.log(event); //option value will be sent as event
}
regionOptions = ["Cordillera", "Prairies", "North", "Canadian Shield", "St. Lawrence River","Atlantic","Great Lakes"];
regionOptionSelected: any;
onregionOptionsSelected(event) {
  console.log(event); //option value will be sent as event
}
cityOptions = ["Vancouver", "Ottawa", "Regina", "Toronto", "Charlottetown", "Edmonton ", "Fredericton "];
cityOptionSelected: any;
oncityOptionsSelected(event) {
  console.log(event); //option value will be sent as event
}
roleOptions = ['Project Manager', 'Production Team', 'Project Admin', 'Administration', 'Field Staff', 'CAD Staff', 'Finance'];
roleOptionSelected: any;

onroleOptionsSelected(event) {
  console.log(event); //option value will be sent as event
}
staffOptions = ["Dwayne", "Dave", "Emily", "Joe", "Kate", "Scott", "Ryan", "Chris", "Justin", "Ken", "Dan", "Tony", "Stephanie", "Laurie"];
staffOptionSelected: any;

onstaffOptionsSelected(event) {
  console.log(event); //option value will be sent as event
}
projectstageOptions = ["Initiated", "Completed", "InProcess", "Pending"];
projectstageOptionSelected: any;

onprojectstageOptionsSelected(event) {
  console.log(event); //option value will be sent as event
}
billingstatusOptions = ["Paid", "Overdue", "Pending"];
billingstatusOptionSelected: any;

onbillingstatusOptionsSelected(event) {
  console.log(event); //option value will be sent as event
}
archivalstatusOptions = ["Date"];
archivalstatusOptionSelected: any;

onarchivalstatusOptionsSelected(event) {
  console.log(event); //option value will be sent as event
}


}
