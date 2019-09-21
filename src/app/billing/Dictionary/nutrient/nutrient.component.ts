import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.List= [
      {id:'1', Nutrient:'Choline', Scenarios:'1', Adult:'N/A', Pregnancy:'1000', Lactation:'1000', },
      {id:'2', Nutrient:'Choline', Scenarios:'2', Adult:'550', Pregnancy:'N/A', Lactation:'N/A', },
      {id:'3', Nutrient:'Choline', Scenarios:'3', Adult:'N/A', Pregnancy:'750', Lactation:'800', },
      {id:'4', Nutrient:'Choline', Scenarios:'4', Adult:'600', Pregnancy:'700', Lactation:'800', },
      {id:'5', Nutrient:'Choline', Scenarios:'5', Adult:'700', Pregnancy:'N/A', Lactation:'N/A', },
      {id:'6', Nutrient:'Vitamin B', Scenarios:'1', Adult:'450', Pregnancy:'N/A', Lactation:'N/A', },
      {id:'7', Nutrient:'Vitamin B', Scenarios:'2', Adult:'800', Pregnancy:'600', Lactation:'570', },
      {id:'8', Nutrient:'Vitamin B', Scenarios:'3', Adult:'N/A', Pregnancy:'450', Lactation:'740', },
      {id:'9', Nutrient:'Vitamin B', Scenarios:'4', Adult:'600', Pregnancy:'N/A', Lactation:'N/A', },
    ];
  }

}
