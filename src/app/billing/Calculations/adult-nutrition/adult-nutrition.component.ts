import { Component, OnInit } from '@angular/core';
import { LogicAdultnutritionComponent } from './logic-adultnutrition/logic-adultnutrition.component';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-adult-nutrition',
  templateUrl: './adult-nutrition.component.html',
  styleUrls: ['./adult-nutrition.component.scss']
})
export class AdultNutritionComponent implements OnInit {

  List: any;

  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) { }

  ngOnInit() {
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

}
