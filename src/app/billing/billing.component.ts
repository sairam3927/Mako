import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  dictionaryCreatePermission: any; 
  calculationsCreatePermission: any;
  detailedReportCreatePermission: any;
  summaryReportCreatePermission: any;
  constructor() { }

  ngOnInit() { 

    let getPermissions = JSON.parse(localStorage.getItem('Permissions'));
    // console.log('Permissions: ', getPermissions);

    if (getPermissions) {
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Dictionary') {
          this.dictionaryCreatePermission = getPermissions[i]['Read']
        }
      }
      for (let j = 0; j < getPermissions.length; j++) {
        let ScreenName = getPermissions[j]['ScreenName']
        if (ScreenName == 'Calculations') {
          this.calculationsCreatePermission = getPermissions[j]['Read']
        }
      }
      for (let k = 0; k < getPermissions.length; k++) {
        let ScreenName = getPermissions[k]['ScreenName']
        if (ScreenName == 'Detailed Report') {
          this.detailedReportCreatePermission = getPermissions[k]['Read']
        }
      }
      for (let l = 0; l < getPermissions.length; l++) {
        let ScreenName = getPermissions[l]['ScreenName']
        if (ScreenName == 'Summary Report') {
          this.summaryReportCreatePermission = getPermissions[l]['Read']
        }
      }
    }
    console.log(this.dictionaryCreatePermission, 'dictionaryCreatePermission');
    console.log(this.calculationsCreatePermission, 'calculationsCreatePermission');
    console.log(this.detailedReportCreatePermission, 'detailedReportCreatePermission');
    console.log(this.summaryReportCreatePermission, 'summaryReportCreatePermission');
  }

}
