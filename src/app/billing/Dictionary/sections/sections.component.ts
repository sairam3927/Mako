import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  List: any;

  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.List= [
      { id:'1',Name:"Pregnancy & Lacatation", Description:"This genetic testing package identifies your nutritional needs during pregnancy or breast-feeding. Because the structure of your genes contributes to defining these needs, your results define the personalized nutritional needs just for you, and cannot be considered appropriate for any another person. These personalized recommendations are for you only.", Recommendation:'' },
      { id:'2',Name:"Adult Nutrition", Description:"This package identifies the nutrient targets you need as adult. Because your DNA structure contributes to defining these targets, these results define the personalized nutritional needs just for you, and cannot be considered appropriate for another person.", Recommendation:'' },
      { id:'3',Name:"Metabolism", Description:"This package aims to identify the link between your genetic structure and the impact that physical activity can have on your health. These genetic tests identify personalized solutions for you that cannot be considered appropriate for another person.", Recommendation:'' },
      { id:'4',Name:"Physical Activity & SPorts Performance", Description:"This package is meant to inform you about certain genetic variations that may be known to be associated with the occurrence of certain diseases. The results of this package cannot be considered as diagnostic tests.", Recommendation:'' },
      { id:'5',Name:"Others", Description:"This package aims to identify the link between your genetic structure and the impact that physical activity can have on your health. These genetic tests identify personalized solutions for you that cannot be considered appropriate for another person.", Recommendation:'' }
    ];
  }
  // public openLogicDialog() {
  //   let dialogRef = this.dialog.open(LogicAdultnutritionComponent, {
  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false,
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }


}
