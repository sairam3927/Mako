import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-Calculations',
  templateUrl: './Calculations.component.html',
  styleUrls: ['./Calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  calculationsCreatePermission: any;
  pregnancyLactationPermission: any;
  adultNutritionPermission: any;
  reportVariablePermission: any;
  detailedReportPermission: any;

  constructor(public dialog: MatDialog, private alertService: AlertService) {
  }
  ngOnInit() {

    let getPermissions = JSON.parse(localStorage.getItem('Permissions'));
    // console.log('Permissions: ', getPermissions);

    if (getPermissions) {
      for (let j = 0; j < getPermissions.length; j++) {
        let ScreenName = getPermissions[j]['ScreenName']
        if (ScreenName == 'Calculations') {
          this.calculationsCreatePermission = getPermissions[j]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Pregnancy/Lactation Table') {
          this.pregnancyLactationPermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Adult Nutrition Table') {
          this.adultNutritionPermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Report Variable') {
          this.reportVariablePermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Detailed Report') {
          this.detailedReportPermission = getPermissions[i]['Read']
        }
      }
    }

  }

}
