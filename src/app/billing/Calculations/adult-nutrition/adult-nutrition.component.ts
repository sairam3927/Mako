import { Component, OnInit } from '@angular/core';
import { LogicAdultnutritionComponent } from './logic-adultnutrition/logic-adultnutrition.component';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { RestrictionComponent } from 'src/app/shared/restriction/restriction.component';

@Component({
  selector: 'app-adult-nutrition',
  templateUrl: './adult-nutrition.component.html',
  styleUrls: ['./adult-nutrition.component.scss']
})
export class AdultNutritionComponent implements OnInit {

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
        if (ScreenName == 'Adult Nutrition Table') {
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

    this.List= [
      { id:'1',Value:"56",Nutrient:'Vitamina A', Units:'mg/zi', Recommendation:'' },
      { id:'2',Value:"900",Nutrient:'Vitamina C', Units:'mg/zi', Recommendation:'' },
      { id:'3',Value:"120",Nutrient:'Vitamina D', Units:'mg/zi', Recommendation:'' },
      { id:'4',Value:"20",Nutrient:'Vitamina E', Units:'mg/zi', Recommendation:'' },
      { id:'5',Value:"30",Nutrient:'Vitamina K', Units:'mg/zi', Recommendation:'' },
      { id:'6',Value:"120",Nutrient:'Tiamina', Units:'mg/zi', Recommendation:'' },
      { id:'7',Value:"56",Nutrient:'Riboflavina', Units:'mg/zi', Recommendation:'' },
      { id:'8',Value:"120",Nutrient:'Niacina', Units:'mg/zi', Recommendation:'' },
      { id:'9',Value:"56",Nutrient:'Vitamina B6', Units:'mg/zi', Recommendation:'' },
    ];
  }
  public openLogicDialog() {
    let dialogRef = this.dialog.open(LogicAdultnutritionComponent, {
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
