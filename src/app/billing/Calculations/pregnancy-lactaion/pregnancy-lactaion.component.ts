import { Component, OnInit } from '@angular/core';
import { LogicModelpopupComponent } from './logic-modelpopup/logic-modelpopup.component';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { RestrictionComponent } from 'src/app/shared/restriction/restriction.component';

@Component({
  selector: 'app-pregnancy-lactaion',
  templateUrl: './pregnancy-lactaion.component.html',
  styleUrls: ['./pregnancy-lactaion.component.scss']
})
export class PregnancyLactaionComponent implements OnInit {

  CreatePermission: any;
  ReadPermission: any;
  UpdatePermission: any;
  DeletePermission: any;

  List: any;

  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) { }

  ngOnInit() {
    let getPermissions = JSON.parse(localStorage.getItem('Permissions'));
    // console.log('Permissions: ', getPermissions);

    if (getPermissions) {
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Pregnancy/Lactation Table') {
          this.CreatePermission = getPermissions[i]['Create']
          this.ReadPermission = getPermissions[i]['Read']
          this.UpdatePermission = getPermissions[i]['Update']
          this.DeletePermission = getPermissions[i]['Delete']
        }
      }
    }
    // console.log(this.CreatePermission, 'CreatePermission');
    // console.log(this.ReadPermission, 'ReadPermission');
    // console.log(this.UpdatePermission, 'UpdatePermission');
    // console.log(this.DeletePermission, 'DeletePermission');

    this.List = [
      { id: '1', Nutrient: 'APA', Units: 'L/zi', Logic: 'NA', Pregnancy: '3', Lactation: '3' },
      { id: '2', Nutrient: 'Carbohydrate', Units: 'g/zi', Logic: 'NA', Pregnancy: '175', Lactation: '177' },
      { id: '3', Nutrient: 'Fibre', Units: 'g/zi', Logic: 'NA', Pregnancy: '28', Lactation: '129' },
      { id: '4', Nutrient: 'Thiamine', Units: 'mg/zi', Logic: 'TBD', Pregnancy: '5', Lactation: '5' },
      { id: '5', Nutrient: 'Vitamin E', Units: 'mg/zi', Logic: 'NA', Pregnancy: '15', Lactation: '19' },
      { id: '6', Nutrient: 'Vitamin D', Units: 'IU', Logic: 'NA', Pregnancy: '400 ', Lactation: '600 ' },
      { id: '7', Nutrient: 'Vitamin k', Units: 'mcg', Logic: 'NA', Pregnancy: '90', Lactation: '120' },
      { id: '8', Nutrient: 'Vitamin A', Units: 'μg', Logic: 'NA', Pregnancy: '700', Lactation: '900' },
      { id: '9', Nutrient: 'Vitamin B12', Units: 'mcg', Logic: 'NA', Pregnancy: '2.6', Lactation: '2.8' },
    ];
  }
  public openLogicDialog() {
    let dialogRef = this.dialog.open(LogicModelpopupComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public restrictionDialog(action) {
    let dialogRef = this.dialog.open(RestrictionComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false, 
    });
    (<RestrictionComponent>dialogRef.componentInstance).action = action;
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
