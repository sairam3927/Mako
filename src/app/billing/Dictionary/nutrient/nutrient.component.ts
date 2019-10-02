import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LogicNutrientComponent } from './logic-nutrient/logic-nutrient.component';

@Component({
  selector: 'app-nutrient',
  templateUrl: './nutrient.component.html',
  styleUrls: ['./nutrient.component.scss']
})
export class NutrientComponent implements OnInit {

  filterToggle:boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  
  List: any;

  constructor(public dialog: MatDialog,
    private alertService: AlertService) { }

  ngOnInit() {
    this.List= [
      {id:'1', Nutrient:'Choline', Adult:'N/A', Section:'Pregnancy & Lactation', Pregnancy:'1000', Lactation:'1000', },
      {id:'2', Nutrient:'Choline', Adult:'500', Section:'Risks of Metabolic imbalances', Pregnancy:'N/A', Lactation:'N/A', },
      {id:'3', Nutrient:'Choline', Adult:'N/A', Section:'Physical Activity', Pregnancy:'750', Lactation:'800', },
      {id:'4', Nutrient:'Choline', Adult:'600', Section:'Sports Performance', Pregnancy:'700', Lactation:'800', },
      {id:'5', Nutrient:'Choline', Adult:'700', Section:'Risks of Metabolic imbalances', Pregnancy:'N/A', Lactation:'N/A', },
      {id:'6', Nutrient:'Vitamin B', Adult:'450', Section:'Sports Performance', Pregnancy:'N/A', Lactation:'N/A', },
      {id:'7', Nutrient:'Vitamin B', Adult:'800', Section:'Nutrition', Pregnancy:'600', Lactation:'570', },
      {id:'8', Nutrient:'Vitamin B', Adult:'N/A', Section:'Risks of Metabolic imbalances', Pregnancy:'450', Lactation:'740', },
      {id:'9', Nutrient:'Vitamin B', Adult:'600', Section:'Nutrition', Pregnancy:'N/A', Lactation:'N/A', },
    ];
  }
  public openLogicDialog() {
    let dialogRef = this.dialog.open(LogicNutrientComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
