import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { LogicModelpopupComponent } from '../pregnancy-lactaion/logic-modelpopup/logic-modelpopup.component';
import { LogicReportvariableComponent } from './logic-reportvariable/logic-reportvariable.component';

@Component({
  selector: 'app-report-variables',
  templateUrl: './report-variables.component.html',
  styleUrls: ['./report-variables.component.scss']
})
export class ReportVariablesComponent implements OnInit {

  List: any;

  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.List =[
      {id:"1",ReportVariable:"Vitamin A recommendation for Pregnancy/Lacation",ConNutrition:"Vitamin A",Section:"Pregnancy/Lactation",Coverage:"Both Reports",Type:"Level 1",Summary:"Pregnancy",TestName:"Test 1",Configured:"", Comment:"In the absence of other causes, the newborn can consume breast milk / formula containing lactose."},
      {id:"2",ReportVariable:"Choline recommendation for Adult",ConNutrition:"Vitamin D",Section:"Adult Nutrition",Coverage:"Summary Report",Type:"Level 2",Summary:"Pregnancy",TestName:"Test 2",Configured:"Checked", Comment:"It may be necessary to test the other parent or the fetus / newborn."},
      {id:"3",ReportVariable:"Vitamin A recommendation for Pregnancy/Lacation",ConNutrition:"Vitamin A",Section:"Pregnancy/Lactation",Coverage:"Both Reports",Type:"Level 2",Summary:"Pregnancy",TestName:"Test 1",Configured:"", Comment:"Daily Thiamine intake of at least 5 mg during pregnancy and lactation."},
      {id:"4",ReportVariable:"Choline recommendation for Adult",ConNutrition:"Vitamin B",Section:"Metabolism",Coverage:"Detailed Report",Type:"Level 1",Summary:"Pregnancy",TestName:"Test 3",Configured:"Checked", Comment:"Daily Thiamine intake of at least 1,4 mg during pregnancy and lactation."},
      {id:"5",ReportVariable:"Vitamin A recommendation for Pregnancy/Lacation",ConNutrition:"Vitamin D",Section:"Metabolism",Coverage:"Both Reports",Type:"Level 2",Summary:"Pregnancy",TestName:"Test 1",Configured:"Checked", Comment:"In the absence of other causes, the newborn can consume breast milk / formula containing lactose."},
      {id:"6",ReportVariable:"Vitamin A recommendation for Pregnancy/Lacation",ConNutrition:"Vitamin A",Section:"Adult Nutrition",Coverage:"Both Reports",Type:"Level 1",Summary:"Pregnancy",TestName:"Test 4",Configured:"", Comment:"It may be necessary to test the other parent or the fetus / newborn."},
      {id:"7",ReportVariable:"Choline recommendation for Adult",ConNutrition:"Vitamin B",Section:"Pregnancy/Lactation",Coverage:"Summary Report",Type:"Level 1",Summary:"Pregnancy",TestName:"Test 3",Configured:"", Comment:"In the absence of other causes, the newborn can consume breast milk / formula containing lactose."},
      {id:"8",ReportVariable:"Choline recommendation for Adult",ConNutrition:"Vitamin D",Section:"Metabolism",Coverage:"Detailed Report",Type:"Level 2",Summary:"Pregnancy",TestName:"Test 4",Configured:"Checked", Comment:"Daily Thiamine intake of at least 1,4 mg during pregnancy and lactation."},
    ];
  }
  public openLogicDialog() {
    let dialogRef = this.dialog.open(LogicReportvariableComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
